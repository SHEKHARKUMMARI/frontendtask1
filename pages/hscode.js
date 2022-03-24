import { useState ,useEffect} from "react";
import StickyHeadTable from "../materialui/pagenation_hscode"
import Link from "next/link"
import styles from "../styles/Home.module.css"


export const getStaticProps = async() => {
  const res = await fetch("https://staging-api.wizfreight.com/v1/hs-codes");
  const hsdata = await res.json();
  return {
      props: {
        hsdata,
      }
  }
}




export default function Hscode({hsdata}){
    const [hs_row,setHsRow]=useState([])

  

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
        <a className={styles.back}> Back </a>
      </Link>
      </div>
  );
}