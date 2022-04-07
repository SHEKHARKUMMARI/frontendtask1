import React ,{useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';


const EditPort = () => {
  const[form,setForm]=useState({name:''});
  const router=useRouter();
  const handleChange=(e)=>{
    const value=e.target.value;
    const label=e.target.id;
    setForm({...form,[label]:value});
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/api/ports/${router.query.id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form) // body data type must match "Content-Type" header
    });
    router.push('../port');
  
  }
  useEffect( async ()=>{
    if(router.query.id){
      const res=await fetch(`http://localhost:3000/api/ports/${router.query.id}`);
      const data=await res.json();
       setForm(data);
    }
    
  },[router.query.id])
  
  return (
    <>
    <form onSubmit={handleSubmit} >
      <div>
        <label sx={{ml:'1rem'}}  >name:</label>
        <TextField  sx={{ m: "1rem" }} style ={{width: '100%'}} id="name" value={form.name}  onChange={handleChange} variant="standard" />
      </div>

        {/* <input type='text' id='name'  value={form.name} onChange={handleChange} / >   */}
      <div>
        <label sx={{ml:'1rem'}} >code</label>
        <TextField  sx={{ m: "1rem" }} style ={{width: '100%'}} id="code" value={form.code}  onChange={handleChange} variant="standard" />
      </div>
      {/* <label>
        code:
        <input type='text' id='code'  value={form.code} onChange={handleChange} / >  
      </label> */}
      <div>
        <label sx={{ml:'1rem'}}  >city</label>
        <TextField  sx={{ m: "1rem" }} style ={{width: '100%'}} id="city" value={form.city}  onChange={handleChange} variant="standard" />
      </div>
      {/* <label>
        city:
        <input type='text' id='city'  value={form.city} onChange={handleChange} / >  
      </label> */}
      <div>
        <label sx={{ml:'1rem'}} >state</label>
        <TextField sx={{ m: "1rem" }} style ={{width: '100%'}} id="state" value={form.state}  onChange={handleChange} variant="standard" />
      </div>
      {/* <label>
         state :
        <input type='text' id='state'  value={form.state} onChange={handleChange} / >  
      </label> */}
      <div>
        <label sx={{ml:'1rem'}}>country</label>
        <TextField sx={{ m: "1rem" }}  style ={{width: '100%'}} id="country" value={form.country}  onChange={handleChange} variant="standard" />
      </div>
      {/* <label>
         country :
        <input type='text' id='country'  value={form.country} onChange={handleChange} / >  
      </label> */}
      {/* <button type='submit' >submit</button> */}
      <Button  sx={{m:'1rem'}} type='submit' variant="contained">Submit</Button>

      {/* name,code,city,state,country */}
    </form>
    </>
  )
}
export default EditPort;



