import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { CircleCheck } from 'lucide-react';
import Logo from "./logo.jsx";

const Register=()=>{


  const [submit,checksubmit]=useState(true);

  const redirect=()=>{

  window.location.href=("/event")

  }

  const setTimer=()=>{

    if(email && number && credit_card){
    setTimeout(redirect,1000);
    }
  }
  
  const isempty=()=>{
    if(email===false || number===false || credit_card===false){
      alert("Fill all the fields");
    }
  }

  const [email,setemail]=useState(false);
  const [number,setnumber]=useState(false);
  const [credit_card,setcreditcard]=useState(false);

  return(
    <>

    <div className="box">
    <Logo/>
    {

   submit? 

    <Box sx={{display:"flex",
    flexDirection:"column" ,gap:2}}>

    <h2 className="registration">Registration</h2>

    <TextField label="Email" 
      onChange={(e)=>(setemail(true))}
    />

    <TextField label="Phone Number" 
      onChange={(e)=>(setnumber(true))}
    />

    <TextField label="Credit Card Number" 
    onChange={(e)=>(setcreditcard(true))}
    />

    <Button variant="contained" sx={{color:"black"}}
      onClick={()=>{

          isempty();
          email && number && credit_card ?(checksubmit(!submit),setTimer()):null;
      }
      }>
      Submit</Button>

    </Box>

      :
   <Box sx={{height:"50%",width:"50%",
       display:"flex",alignItems:"center", 
       justifyContent:"center",
       fontSize:"2.5rem",flexDirection:"column"}}>
      <div> Successfully register</div>

      <CircleCheck size={60} color="blue" strokeWidth={2}/>

   </Box> 

    }</div>
    </>
  )

}
export default Register
