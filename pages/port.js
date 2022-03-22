import { useState ,useEffect} from "react";
export default function Port(){
    const [data, setData] = useState(null);
  
  useEffect(()=>{
   fetch("https://staging-api.wizfreight.com/v1/ports").then((res)=>res.json()).then((dt)=>{setData(dt)});
  },[])

  

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
      </div>
  );
}