
import sqlite from 'sqlite';
export default async function getAllPersonById(req, res) {
  const db=await sqlite.open('./mydb.sqlite');
  if(req.method === 'PUT')
  {
    const statement=await db.prepare('UPDATE Port SET name=?,code=?,city=?,state=?,country=? WHERE id=?'); //name,code,city,state,country
    const result=statement.run(req.body.name,req.body.code,req.body.city,req.body.state,req.body.country,req.query.id);
    (await result).finalize();
  }
const port=await db.get('SELECT*FROM Port WHERE id=?',[req.query.id]);

  res.json(port);
}