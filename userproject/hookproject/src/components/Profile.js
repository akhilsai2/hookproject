import React from 'react'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import {useAuth} from './Auth'


function Profile() {
    const navigate=useNavigate()
    const auth=useAuth()
    
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",backgroundColor:"white",height:"90vh",paddingLeft:"20px",paddingRight:"20px",width:"85%",flexGrow:"1"}}>
        
        <h3>Hi {auth.username}</h3> 
        <button type="button" onClick={()=>{ Cookies.remove("jwt_token")
        navigate("/login")
  }}>Logout</button></div>
  )
}

export default Profile