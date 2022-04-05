
import sqlite from 'sqlite';
export default async function getAllPersonById(req, res) {
  const db=await sqlite.open('./mydb.sqlite');
  if(req.method === 'PUT')
  {
    const statement=await db.prepare('UPDATE Person SET name=?,email=? WHERE id=?');
    const result=statement.run(req.body.name,req.body.email,req.query.id);
    (await result).finalize();
  }
const port=await db.all('SELECT*FROM Port');

  res.json(port);
}