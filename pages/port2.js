import {useState,useEffect} from 'react';
import Pagenation from '../components/pagenation_port'
import { useRouter } from "next/router";
import Button from '@mui/material/Button';
import Link from 'next/link'
import AddIcon from '@mui/icons-material/Add';
const  Port=()=>{
    const [pageNo,setPageNo]=useState(1);
    const [pageData,setPageData]=useState();
    const count=3;
    const router=useRouter();
    useEffect( async ()=>{
        const res=await fetch(`http://localhost:5050/v1/ports?page=${pageNo}&count=${count}`);
        const data=await res.json();
        if(data){
            setPageData(data);
        }
        console.log("data for page=",data);
    },[pageNo]);
    const handlePageNumberChange=(p)=>{
        setPageNo(p);
    }
    const handleEditClick=(id)=>{
        router.push(`./editport/${id}`);
     }
    return (
        <>
        <h1>Port Page</h1>
        {
          pageData&&<Pagenation handlePageNumberChange={handlePageNumberChange} handleEditClick={handleEditClick} rows={pageData}  count={count} />

        }
        <Link href='/addport'>
          <Button endIcon={<AddIcon />} variant="contained">Add Port</Button>
       </Link>
        </>
    )
}
export default Port