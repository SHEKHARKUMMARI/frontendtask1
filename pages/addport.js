import { useState } from 'react'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';


const AddPort = () => {
    const [portData, setPortData] = useState({
        name: '',
        code: '',
        city: '',
        state: '',
        country: '',
    })

    const router = useRouter();

    const addPortSubmitHandler = async (e)=>{
        e.preventDefault();
        if(portData.name.trim() != "" && portData.code.trim() != "" && portData.city.trim() != "" && portData.state.trim() != "" && portData.country.trim() != ""){
            const response = await fetch(`http://localhost:3000/api/ports`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(portData) // body data type must match "Content-Type" header
        });
        router.push('../port');  
        }else{
            alert("Please fill all the fields 🙁")
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
        <Button endIcon={<AddIcon />} sx={{ m: "1rem" }} variant="contained" type="submit">ADD PORT</Button>
        
    </form>
  )
}

export default AddPort
