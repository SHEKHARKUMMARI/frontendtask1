import { useState } from 'react'
import { useRouter } from 'next/router'

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
        if(portData){
            console.log("event=",portData);
            const response = await fetch(`http://localhost:3000/api/ports`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(portData) // body data type must match "Content-Type" header
        });
       
        console.log("resp=",response.json());
        router.push('../port');  
        }
      }
 
    function inputFieldsHandler(event){
        const value = event.target.value;
        const name = event.target.name;


        setPortData({...portData,[name]:value});
        console.log(portData);

        // setPortData((preValue) => {

        //     if(name === 'name'){
        //         return {
        //             name: value,
        //             code: preValue.code,
        //             city: preValue.city,
        //             state: preValue.state,
        //             country: preValue.country,
        //         }
        //     }else if(name === 'code'){
        //         return {
        //             name: preValue.name,
        //             code: value,
        //             city: preValue.city,
        //             state: preValue.state,
        //             country: preValue.country,
        //         }
        //     }else if(name === 'city'){
        //         return {
        //             name: preValue.name,
        //             code: preValue.code,
        //             city: value,
        //             state: preValue.state,
        //             country: preValue.country,
        //         }
        //     }else if(name === 'state'){
        //         return {
        //             name: preValue.name,
        //             code: preValue.code,
        //             city: preValue.city,
        //             state: value,
        //             country: preValue.country,
        //         }
        //     }else if(name === 'country'){
        //         return {
        //             name: preValue.name,
        //             code: preValue.code,
        //             city: preValue.city,
        //             state: preValue.state,
        //             country: value,
        //         }
        //     }
        // })


    }

  return (
    <form onSubmit={addPortSubmitHandler}>
        <div>
            <input type="text"  placeholder='enter name..' onChange={inputFieldsHandler} name='name' value={portData.name}/>
        </div>
        <div>
            <input type="text"  placeholder='enter code..' onChange={inputFieldsHandler} name='code' value={portData.code}/>
        </div>
        <div>
            <input type="text"  placeholder='enter city..' onChange={inputFieldsHandler} name='city' value={portData.city}/>
        </div>
        <div>
            <input type="text"  placeholder='enter state..' onChange={inputFieldsHandler} name='state' value={portData.state}/>
        </div>
        <div>
            <input type="text"  placeholder='enter country..' onChange={inputFieldsHandler} name='country' value={portData.country}/>
        </div>
        <button type="submit">ADD PORT</button>
        
    </form>
  )
}

export default AddPort
