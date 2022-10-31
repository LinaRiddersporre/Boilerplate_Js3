import { useNavigate } from "react-router-dom"
const Users = () => {
    const navigate = useNavigate();

    const goToUser = () => {
        navigate('/User/6')
    }

    const mayBeUser = ()  => {
        if(true){
            navigate('/users/6', {state: {name: 'Lina', age: 4, number: [3, 5, 6]}})
        }else{
            navigate('/')
        }
    }

    return(
        <div>
            <h1>På Users</h1>
            <button onClick={() => goToUser()}>Go to User</button>
            <button onClick={() => mayBeUser()}>Go to User</button>

        </div>
        
    )
}

export default Users