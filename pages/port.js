import { useState ,useEffect} from "react";
import StickyHeadTable from "../materialui/pagenation"
export default function Port(){
    const [data, setData] = useState(null);
      const [row,setRow]=useState([]);
  useEffect(()=>{
   fetch("https://staging-api.wizfreight.com/v1/ports").then((res)=>res.json()).then((dt)=>{setData(dt)});
  },[])
  useEffect(()=>{
   if(data){
       const rw=data.ports.map((curElem)=> { 
          const Name=curElem.name;
          const Code=curElem.info.city.info.country.code ;
          const City=curElem.info.city.name;
          const State=curElem.info.state;
          const Country=curElem.info.city.info.country.name;
           return {Name,Code,City,State,Country}
       })
       setRow(rw);
   }      
   
  },[data])
  useEffect(()=>{console.log(row)});
  return (
    <div className="App">
    {data&&<StickyHeadTable rows={row} />}
      {/* {data&& data.ports.map((curElem)=> {
        return (
            <div key={curElem.id}>
                <h3>Name : <span>{curElem.name}</span></h3>
                <h3>Code : <span>{curElem.info.city.info.country.code}</span></h3>
                <h3>City : <span>{curElem.info.city.name}</span></h3>
                <h3>State : <span>{curElem.info.state}</span></h3>
                <h3>Country : <span>{curElem.info.city.info.country.name}</span></h3>
            </div>
          )
      }) 
      } */}
      </div>
  );
}

  