import {useState,useEffect} from 'react';
import Pagenation from '../components/pagenation_port'
import { useRouter } from "next/router";
import Button from '@mui/material/Button';
import Link from 'next/link'
import AddIcon from '@mui/icons-material/Add';
const  Port=()=>{
    const [pageNo,setPageNo]=useState(1);
    const [pageData,setPageData]=useState();
    const [searchText,setSearchtext]=useState();
    const count=3;
    const router=useRouter();
    useEffect( async ()=>{
        if(searchText){
            const res = await fetch(`http://localhost:5050/v1/port?key=${searchText}&page=${pageNo}&count=${count}`)
            const data = await res.json()
            if(data){
                setPageData(data);
            }
        } else {
            const res = await fetch(`http://localhost:5050/v1/ports?page=${pageNo}&count=${count}`)
            const data = await res.json()
            if(data){
                setPageData(data)
            }
        }
    },[pageNo,searchText])

  
    const handlePageNumberChange=(p)=>{
        setPageNo(p)
    }
    const handleEditClick=(id)=>{
        router.push(`./editport/${id}`);
     }
     const handleSearchTextChange=(text)=>{
         setSearchtext(text);
     }
    return (
        <>
        <h1 sx={{ m:2 }}  >Ports
        <Link href='/addport'> 
          <Button sx={{ m:2 }} endIcon={<AddIcon />} variant="contained">Add Port</Button>
       </Link>
       </h1>
        {
          pageData&&<Pagenation handlePageNumberChange={handlePageNumberChange} handleEditClick={handleEditClick} rows={pageData} searchText={searchText} count={count} handleSearchTextChange={handleSearchTextChange} />

        }
        
        </>
    )
}
export default Port