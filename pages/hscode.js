import { useState ,useEffect} from "react";
export default function Hscode(){
    const[data,setData]=useState(null);
  useEffect(()=>{
    console.log("enter....");
   fetch("https://staging-api.wizfreight.com/v1/hs-codes").then((res)=>res.json()).then((dt)=>{setData(dt)});
   console.log("exit",data);
  },[])
  return (
    <div className="App">
      {data&& data.hs_codes.map((ele)=><div>{ele.name},{ele.code},</div>)}
      </div>
  );
}