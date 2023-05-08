import React from 'react'
import './home.css'

function Home() {
  return (
  
  
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height:"90vh",width:"85%",flexGrow:"1"}} className="homebg">
     
        {/* <h1 style={{fontFamily:"cursive",color:"#12314f",fontSize:"40px",textDecoration:"underline",alignSelf:"flex-start"}}>Welcome User</h1> */}
      
        <img src="/images/pic.jpg" alt="comp" className="image"/>
    </div>
    
    
    
  
   
  )
}

export default Home