import { useState ,useEffect} from "react";
import StickyHeadTable from "../materialui/pagenation_hscode"
import Link from "next/link"
import styles from "../styles/Home.module.css"



export default function Hscode(){
    const[hsdata,setHsData]=useState(null);
    const [hs_row,setHsRow]=useState([])

  useEffect(()=>{
   fetch("https://staging-api.wizfreight.com/v1/hs-codes").then((res)=>res.json()).then((dt)=>{setHsData(dt)});
  },[])

  useEffect(()=>{
    if(hsdata){
        const rows=hsdata.hs_codes.map((curElem)=> { 
           const Name=curElem.name;
           const Code=curElem.code ;
            return {Name,Code}
        })
        setHsRow(rows);
    }      

   },[hsdata])

  return (
    <div className="App">
      {hsdata && < StickyHeadTable rows={hs_row} />}
      <Link href="/">
        <p className={styles.back}> Back </p>
      </Link>
      </div>
  );
}