import {useState} from 'react'
import {useNavigate,Navigate,NavLink} from 'react-router-dom'

import Cookies from 'js-cookie'
import Axios from 'axios'
import {useAuth} from './Auth'


function 
Login() {
    const [Username,setUsername]=useState('')
    const [Password,setPassword]=useState('')
     const [errMsg,setErrmsg]=useState("")
    const [error,setErr]=useState(false)
    const navigate=useNavigate()
    const auth=useAuth()
    // const onLogin=  ()=>{
    //     if (username==="akhil" && email==="akhil222"){
    //         const token=uuidv4()
    //         Cookies.set("jwt_token",token,{expires:30})
    //         auth.login(username)
    //         navigate("/")
    //     }
    //     else{
    //       setError(true)
    //     }
    // }
    const onLogin= async ()=>{ 
      try{
      const response= await  Axios.post("http://localhost:5000/login", {Username,Password})
      console.log(response)
      if (response.statusText==="OK"){
        const data= await response.data
            Cookies.set("jwt_token",data.jwtToken,{expires:30})
            auth.login(Username)
            navigate("/")

      }
    }
    catch (err){
      console.log(err.response.data)
      setErrmsg(err.response.data.err)
      setErr(true)
      setUsername('')
      setPassword('')
    }
      
    }
    if (Cookies.get("jwt_token")!==undefined){
      return <Navigate to= "/" replace />
    }else{
  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"100vh"}}>
   
  
    <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"250px",width:"250px",border:"1px solid #bfbfbf",boxShadow:"0px 4px 16px 0px #bfbfbf",borderRadius:"10px"}}>
        
        <label htmlFor="username" style={{marginBottom:"10px",fontWeight:"bold"}}>
            username
        </label>
        <input id="username" style={{marginBottom:"10px"}} type="text" value={Username} onChange={(e)=>setUsername(e.target.value)} /> 
        <label htmlFor="email" style={{marginBottom:"10px",fontWeight:"bold"}}>
          Password
        
        </label>
        <input id="email"   style={{marginBottom:"10px"}} type="password" value={Password} onChange={(e)=>setPassword(e.target.value)}  />
        <button type="button" className="btn" style={{alignSelf:"center"}}onClick={onLogin}>Login</button>
        
        {error && <p style={{color:"red",fontSize:"10px",fontWeight:"bold"}}> *{errMsg}</p>}
        <NavLink to="/register" style={{marginTop:"5px"}}>Create User</NavLink>
    </div>
    </div>
  )
    }
}

export default 
Login