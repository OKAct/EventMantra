import logo from '../assets/ald.png'



const Logo=()=>{
  
  const redirect=()=>{
    window.location.href="/home";
  }

  return(
    <>
    <img src={logo} className="logo" onClick={redirect}></img>
    </>
  )

}
export default Logo

