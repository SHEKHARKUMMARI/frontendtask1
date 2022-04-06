
import sqlite from 'sqlite';
export default async function getAllPersonById(req, res) {
  const db=await sqlite.open('./mydb.sqlite');
  if(req.method === 'POST')
  {
    const statement=await db.prepare('INSERT INTO Port(name,code,city,state,country) VALUES(?,?,?,?,?)'); //name,code,city,state,country
    const result=statement.run(req.body.name,req.body.code,req.body.city,req.body.state,req.body.country);
    (await result).finalize();
  }

const port=await db.all('SELECT*FROM Port');


  res.json(port);
}