import { useState ,useEffect} from "react";
import StickyHeadTable from "../materialui/pagenation_port"
export default function Port(){
    const [portdata, setData] = useState(null);
      const [row,setRow]=useState([]);
  useEffect(()=>{
   fetch("https://staging-api.wizfreight.com/v1/ports").then((res)=>res.json()).then((dt)=>{setData(dt)});
  },[])
  useEffect(()=>{
   if(portdata){
       const port_row=portdata.ports.map((curElem)=> { 
          const Name=curElem.name;
          const Code=curElem.info.city.info.country.code ;
          const City=curElem.info.city.name;
          const State=curElem.info.state;
          const Country=curElem.info.city.info.country.name;
           return {Name,Code,City,State,Country}
       })
       setRow(port_row);
   }      
   
  },[portdata])
  
  return (
    <div className="App">
    {portdata&&<StickyHeadTable rows={row} />}
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

  