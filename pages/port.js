import { useState ,useEffect} from "react";
export default function Port(){
    const[data,setData]=useState(null);
  useEffect(()=>{
    console.log("enter....");
   fetch("https://staging-api.wizfreight.com/v1/ports").then((res)=>res.json()).then((dt)=>{setData(dt)});
   console.log("exit",data);
  },[])
  return (
    <div className="App">
      {data&& data.ports.map((ele)=><div>{ele.name},{ele.code},{ele.country}</div>)}
      </div>
  );
}