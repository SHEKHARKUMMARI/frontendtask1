import { useState ,useEffect} from "react";
import StickyHeadTable from '../materialui/pagenation_hscode'

export default function Hscode(){
    const[data,setData]=useState(null);
    const [row,setRow]=useState([])
  useEffect(()=>{
    console.log("enter....");
   fetch("https://staging-api.wizfreight.com/v1/hs-codes").then((res)=>res.json()).then((dt)=>{setData(dt)});
   console.log("exit",data);
  },[])

  useEffect(()=>{
    if(data){
        const rw=data.hs_codes.map((curElem)=> { 
           const Name=curElem.name;
           const Code=curElem.code ;
            return {Name,Code}
        })
        setRow(rw);
    }      

   },[data])

  return (
    <div className="App">
      {data && < StickyHeadTable rows={row} />}
      </div>
  );
}