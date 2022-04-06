import React ,{useState,useEffect} from 'react';
import { useRouter } from 'next/router';

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
    console.log("event=",form);
    const response = await fetch(`http://localhost:3000/api/ports/${router.query.id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form) // body data type must match "Content-Type" header
    });
    console.log("resp=",response.json());
  
  }
  useEffect( async ()=>{
    if(router.query.id){
      const res=await fetch(`http://localhost:3000/api/ports/${router.query.id}`);
      const data=await res.json();
       setForm(data);
       console.log("data=",data);
    }
    
  },[router.query.id])
  
  return (
    <>
    <form onSubmit={handleSubmit} >
      <label>
         name :
        <input type='text' id='name'  value={form.name} onChange={handleChange} / >  
      </label>
      <label>
        code:
        <input type='text' id='code'  value={form.code} onChange={handleChange} / >  
      </label>
      <label>
        city:
        <input type='text' id='city'  value={form.city} onChange={handleChange} / >  
      </label>
      <label>
         state :
        <input type='text' id='state'  value={form.state} onChange={handleChange} / >  
      </label>

      <label>
         country :
        <input type='text' id='country'  value={form.country} onChange={handleChange} / >  
      </label>
      <button type='submit' >submit</button>
      {/* name,code,city,state,country */}
    </form>
    </>
  )
}
export default EditPort;
