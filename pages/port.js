import { useState ,useEffect} from "react";
import StickyHeadTable from "../materialui/pagenation_port"
import Heading from "../materialui/ports_heading"

export default function Port(){
    const [data, setData] = useState(null);
      const [row,setRow]=useState([]);

  useEffect(()=>{
   fetch("https://staging-api.wizfreight.com/v1/ports").then((res)=>res.json()).then((dt)=>{setData(dt)});
  },[])

<<<<<<< HEAD
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
      <Heading />
    {data&&<StickyHeadTable rows={row} />}
=======
  

  return (
    <div className="App">
      {data&& data.ports.map((curElem)=> {
        const {name} = curElem;
        const {code} = curElem.info.city.info.country;
        const city = curElem.info.city.name;
        const {state} = curElem.info;
        const country = curElem.info.city.info.country.name
        
        return (
            <div key={curElem.id}>
                <h3>Name : <span>{name}</span></h3>
                <h3>Code : <span>{code}</span></h3>
                <h3>City : <span>{city}</span></h3>
                <h3>State : <span>{state}</span></h3>
                <h3>Country : <span>{country}</span></h3>
            </div>
          )
      })      
      } 
>>>>>>> c0f6ea341f035f67a8168d3fe075a17d6d29a735
      </div>
  );
}

  