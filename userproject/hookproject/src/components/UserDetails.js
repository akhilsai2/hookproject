import {useState,useEffect,useRef} from 'react'
import {useParams} from 'react-router-dom'

function Profile() {
    const [persondata,setPersonData]=useState({})
    let {userId}=useParams()
    
    const  singleData=useRef(async (userId)=>{
      const response= await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      const data=await response.json()
      console.log(data)
      setPersonData(data)
  })
    useEffect(()=>{
      console.log(userId)
     
        singleData.current(userId)
    },[userId])

  return (
    <div style={{display:"flex",justifyContent:"center",height:"250px"}}>
    <div style={{backgroundColor:"#f9f9f9",paddingLeft:"20px",border:"1px solid #cbd357",borderRadius:"5px",boxShadow:"0px 4px 16px 0px gray", width:"50%",height:"200px"}}>
        <h3>Name : {persondata.name}</h3>
        <p>username : {persondata.username}</p>
        <p>ph.no: {persondata.phone}</p>
        <p>website : {persondata.website}</p>

    </div>
    </div>
  )
}

export default Profile