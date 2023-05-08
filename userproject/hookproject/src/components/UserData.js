import {useEffect,useState} from 'react'
import {Outlet,Link} from 'react-router-dom'




function UserData() {
    const [userprofiles,setUserprofiles]=useState([])

    useEffect(()=>{
        async function fetchData(){
            const response= await fetch("https://jsonplaceholder.typicode.com/users")
            const profiledata=await response.json()
             setUserprofiles(profiledata)
        }
        fetchData()
    },[])
  
    return (
       
        <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",backgroundColor:"lightgray",height:"90vh",paddingLeft:"20px",paddingRight:"20px",width:"85%",overflowY:"auto",flexGrow:"1"}}>
      
    <table style={{marginTop:"10px",tableLayout:"fixed"}}>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Mail</th>
            </tr>
        </thead>
        <tbody >
          {userprofiles.map((each)=>(
            <tr  key={each.id}>
                <td>{each.id}</td>
                <td>{each.name}</td>
               <td><Link to={`/active-users/${each.id}`} >{each.email}</Link> </td>
            </tr>
          ))}
        </tbody>

    </table>
    <div>
        <h3 style={{textAlign:"center"}}>User Details</h3>
        <Outlet/>
       
    </div>
  
    </div>
    
  )
}

export default UserData