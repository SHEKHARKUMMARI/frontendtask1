import * as React from 'react';
import { useState } from 'react'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const AddPort = () => {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(false);

  const [open1,setOpen1]=useState(false);

 


  


    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };




    const handleClose1 = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen1(false);
    };

    const [portData, setPortData] = useState({
        Name: '',
        Code: '',
        City: '',
        State: '',
        Country: '',
    })

    const router = useRouter();

    const addPortSubmitHandler = async (e)=>{
        e.preventDefault();
        if(!portData.name|| !portData.code || !portData.city || !portData.state || !portData.country){
           // body data type must match "Content-Type" header
           console.log("else part");
           
            setOpen(true);
        
        }else{
            const response = await fetch(`http://localhost:5050/v1/ports`, {
                method: 'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: JSON.stringify(portData) 
        })

        if(response.ok === true ){
          setOpen1(true)
          router.push('./ports');
        }
      }
    }

    function inputFieldsHandler(event){
        const value = event.target.value;
        const name = event.target.name;

        setPortData({...portData,[name]:value});
    }

  return (
    <form onSubmit={addPortSubmitHandler} className="form_container">
        <div>
            <TextField sx={{ m: "1rem" }} style ={{width: '100%'}} 
            className='input_field' type="text" id="standard-basic" label="Name" variant="standard" onChange={inputFieldsHandler} name='name' value={portData.name}/>
        </div>
        <div>
            <TextField sx={{ m: "1rem" }} style ={{width: '100%'}}  
             className='input_field' type="text" id="standard-basic" label="Code" variant="standard" onChange={inputFieldsHandler} name='code' value={portData.code}/>
        </div>
        <div>
            <TextField sx={{ m: "1rem" }} style ={{width: '100%'}} 
            className='input_field' type="text" id="standard-basic" label="City" variant="standard" onChange={inputFieldsHandler} name='city' value={portData.city}/>
        </div>
        <div>
            <TextField sx={{ m: "1rem" }} style ={{width: '100%'}} 
            className='input_field' type="text" id="standard-basic" label="State" variant="standard" onChange={inputFieldsHandler} name='state' value={portData.state}/>
        </div>
        <div>
            <TextField sx={{ m: "1rem" }} style ={{width: '100%'}} 
            className='input_field' type="text" id="standard-basic" label="Country" variant="standard" onChange={inputFieldsHandler} name='country' value={portData.country}/>
        </div>
        <Button  endIcon={<AddIcon />} sx={{ m: "1rem" }} variant="contained" type="submit">ADD PORT</Button>
        <div>
        {open && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
           <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
              Please Fill All The Fields
          </Alert>
      </Snackbar>}
      {open1 && <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Successfully Added YOUR PORT
          </Alert>
      </Snackbar>}
        
    </div>

    </form>
  )
}

export default AddPort
