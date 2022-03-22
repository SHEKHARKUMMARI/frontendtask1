import { useState ,useEffect} from "react";
export default function Port(){
    const [data, setData] = useState(null);
  
  useEffect(()=>{
   fetch("https://staging-api.wizfreight.com/v1/ports").then((res)=>res.json()).then((dt)=>{setData(dt)});
  },[])

  return (
    <div className="App">
      {data&& data.ports.map((curElem)=> {
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
      
      }
      </div>
  );
}