import { useState ,useEffect} from "react";
import StickyHeadTable from "../materialui/pagination"
import BackButton from '../materialui/backbutton'

export const getStaticProps = async() => {
  const res = await fetch("https://staging-api.wizfreight.com/v1/hs-codes");
  const hsData = await res.json();
  return {
      props: {
        hsData,
      }
  }
}


export default function HsCode({hsData}){
    const [hs_row,setHsRow]=useState([])  
    const [columns, setColumns] = useState([]);




  useEffect(()=>{
    if(hsData){
        const rows=hsData.hs_codes.map((curElem)=> { 
           const Name=curElem.name;
           const Code=curElem.code ;
            return {Name,Code}
        })

        
        setHsRow(rows);
    }      

   },[hsData])


   


   useEffect(() => {
      if(hs_row){
        const tempData = hs_row.length !== 0 ? Object.keys(hs_row[0]).map(ele => {
          return {
            "id": ele,
            "label": ele,
          }
        }): [];
        setColumns(tempData);
      }
   }, [hs_row])



   
  return (
    <div className="App">
      {hsData && columns && <StickyHeadTable columns={columns} rows={hs_row}  heading="HS CODES"/>}
        <BackButton />
      </div>
  );
}