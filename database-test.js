const sqlite =require('sqlite');
async function setup(){
const db=await sqlite.open('./mydb.sqlite');
await db.migrate({force:'last'});
const ports=await db.all('SELECT*FROM Port');
console.log("people=",JSON.stringify(ports,null,2));
}
setup();