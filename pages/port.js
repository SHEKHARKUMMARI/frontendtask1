import { useState ,useEffect} from "react";
import StickyHeadTable from "../materialui/pagination";
import BackButton from '../materialui/backbutton';
import { useRouter } from "next/router";
import Button from '@mui/material/Button';
import Link from 'next/link'

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
    const [columns, setColumns] = useState([]);
    const router=useRouter();
    
  // useEffect(()=>{
  //  if(data){
  //      const port_row=data.ports.map((curElem)=> { 
  //         const Name=curElem.name;
  //         const Code=curElem.info.city.info.country.code ;
  //         const City=curElem.info.city.name;
  //         const State=curElem.info.state;
  //         const Country=curElem.info.city.info.country.name;
  //          return {Name,Code,City,State,Country}
  //      })
  //      setRow(port_row);
  //  }      
   
  // },[data])
  
useEffect( async ()=>{
  const res=await fetch('http://localhost:3000/api/ports');
  const data=await res.json();
  console.log(data);
  setRow(data);
},[])


  useEffect(() => {
    if(row){
      const tempData = row.length !== 0 ? Object.keys(row[0]).map(ele => {
        return {
          "id": ele,
          "label": ele,
        }
      }): [];
      setColumns(tempData);
    }
 }, [row])

  const handleEditClick=(id)=>{
           router.push(`./editport/${id}`);
  }
  return (
    <div className="App">
    {data&& columns && <StickyHeadTable columns={columns} rows={row} heading="PORTS PAGE" handleEditClick={handleEditClick} />}
      <BackButton />
      <Link href='/addport'>
          <Button variant="contained">Add Port</Button>
      </Link>
      </div>
  );
}

  