import React ,{useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const EditPort = () => {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [EditSuccess,setEditSuccess] =useState(false);



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setEditSuccess(false);
  };


  const[form,setForm]=useState({name:''});
  const router=useRouter();
  const handleChange=(e)=>{
    const value=e.target.value;
    const label=e.target.id;
    setForm({...form,[label]:value});
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5050/v1/ports/${router.query.id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form) // body data type must match "Content-Type" header
    });

    if(response.ok){
      setEditSuccess(true)
    }
   
  
  }


  useEffect(()=>{
    if(EditSuccess){
      setTimeout(()=>{
        setEditSuccess(true);
        router.push('../ports');
      },1000)
    }
  },[EditSuccess]);





  useEffect( async ()=>{
    if(router.query.id){
      const res=await fetch(`http://localhost:5050/v1/ports/${router.query.id}`);
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

      {EditSuccess && <Snackbar open={EditSuccess} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Successfully Edited YOUR PORT
          </Alert>
      </Snackbar>}
    </form>
    </>
  )
}
export default EditPort;



