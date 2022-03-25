import { useState ,useEffect} from "react";
import StickyHeadTable from "../materialui/pagenation_port"
import Heading from "../materialui/ports_heading"
import styles from "../styles/Home.module.css"
import Backbutton from '../materialui/backbutton'


export const getStaticProps = async() => {
  const res = await fetch('https://staging-api.wizfreight.com/v1/ports');
  const data = await res.json();
  return {
      props: {
          data,
      }
  }
}  

export default function Port({data}){
    const [row, setRow] = useState([]);

  useEffect(()=>{
   if(data){
       const port_row=data.ports.map((curElem)=> { 
          const Name=curElem.name;
          const Code=curElem.info.city.info.country.code ;
          const City=curElem.info.city.name;
          const State=curElem.info.state;
          const Country=curElem.info.city.info.country.name;
           return {Name,Code,City,State,Country}
       })
       setRow(port_row);
   }      
   
  },[data])
  
  return (
    <div className="App">
      <Heading />
    {data&&<StickyHeadTable rows={row} />}
      <Backbutton />
      </div>
  );
}

  