import './../App.css';
import Box from '@mui/material/Box';
const Contact=()=>{

  return (
    <>
    
    <div className="box">

    <Box sx={{backgroundColor:'rgba(255,255,255,0.3)',
              height:"50%",
              width:"50%",
              paddingBottom:"5rem",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              flexDirection:"column",
              gap:"1.5rem"
    }}>

    <h2>Email US</h2>
    <div>eventmantra@proton.me</div>   
    <h2>Phone number</h2>
    <div>9123245232323</div>


    </Box>

    </div>


    </>
  )

}
export default Contact
