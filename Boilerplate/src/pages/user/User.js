import { useEffect } from "react"
import { useParams, useLocation, useNavigate} from "react-router-dom"

const User = () => {
    const location = useLocation()
    const id = useParams().id
    const navigate = useNavigate()
   
    useEffect(() => {
        if(location.state == null){
            navigate('/')
        }
    }, [])
    return(
        <div>
            <h1>På User med id {id}</h1>
            {console.log(useParams())}
            {console.log('location',useLocation())}
            {location.state && <h2>{location.state.name}</h2>}
            
        </div>
    )
}
    
export default User