import { useState ,useEffect} from "react";
import StickyHeadTable from "../materialui/pagenation_port"
import Heading from "../materialui/ports_heading"
import Link from "next/link"
import styles from "../styles/Home.module.css"

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
      <Heading />
    {portdata&&<StickyHeadTable rows={row} />}
      <Link href="/">
        <p className={styles.back}> Back </p>
      </Link>
      </div>
  );
}

  