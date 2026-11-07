
import { useState } from 'react'
import Button from '@mui/material/Button'


const Card=({Ename,img1,img2,event,location,time})=>{

  const [show,setshow]=useState(true);

  return (
    <>{
    

    show?
    <div className="card1" onClick={()=>{setshow(!show)}} style={{
      backgroundImage:`url(${img1})`,
      backgroundSize:"cover",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat"
    }}>{Ename}</div>
    :
    <div className="card2"
      style={{
      backgroundImage:`url(${img2})`,
      backgroundSize:"cover",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat"
    }}
     >


      <div className="eventdetail">
      <div>{event}</div>
      <div>Location:{location}</div>
      <div>Time:{time}</div>
      </div>

    <Button variant="contained" onClick={()=>window.location.href='/register'}>Register</Button>

      <Button className="close" 
      onClick={()=>{setshow(!show)}} 
      sx={{color:"red"}}>
      X
      </Button>
      </div>




    }</>
  )

}

export default Card
