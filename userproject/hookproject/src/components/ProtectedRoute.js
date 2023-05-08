
import {Navigate} from 'react-router-dom'

import Cookies from 'js-cookie'

const ProtectedRoute = ({children}) => {
   
    
    if (Cookies.get("jwt_token")===undefined){
        return <Navigate to="/login" replace />
    }
  return children
}

export default ProtectedRoute