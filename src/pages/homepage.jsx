import Button from '@mui/material/Button'
import './../App.css'
import Box from '@mui/material/Box';
import logo from '../assets/ald.png';
import Logo from './logo.jsx'
import l1 from './../assets/images.jpg'

const Homepage=()=>{

  return (
    <>
    <div className="box">

    <Logo/>


    <Box sx={{ display:'flex',flexDirection:'column', gap: '1.25rem' ,height:'65%',
        alignItem:"center",
        justifyContent:"center",
        width:'100%',
        backgroundImage:`url(${l1})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
    }}>

    <div className="slogan">Let's Go and Touch Some Grass Together</div>
    <Button variant="text" sx={{position:'relative',left:'70%',color:'white',
        height:'15%',width:'20%',
        border:'0.125rem solid white',
        borderRadius:'1.2rem',
        '&:hover':{
          background:'green',  
          scale:"1.2",
          border:"0rem solid white"
    }}} onClick={()=>window.location.href ='/event'}>Explore Events</Button>

    <Button variant="text" sx={{
      position:'relative',left:'70%',
        height:'15%',width:'20%',
      color:'white' ,border:'.125rem solid white',borderRadius:'1.2rem',borderRadius:'1.2rem','&:hover':{
        border:"0rem solid white",
      background:'green',scale:"1.2"
    }}}
    onClick={()=>window.location.href='/contact'}
    >Contact Us</Button>

    </Box>




    </div>
    </>
  )

}
export default Homepage
