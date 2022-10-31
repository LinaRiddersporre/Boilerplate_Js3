import { NavLink, useNavigate } from "react-router-dom";
const NotFound = () => {
    const navigater = useNavigate()
    const goBack = () => {
        navigater(-1)
    }
    return(
        <div>
            <h1>404 Not found</h1>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='LogIn'>LogIn</NavLink></li>
                <button onClick={() => goBack()}>Go back</button>

            </ul>
        </div>
        
    )
}

export default NotFound;