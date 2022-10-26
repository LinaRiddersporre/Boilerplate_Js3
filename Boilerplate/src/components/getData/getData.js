import { useEffect, useState } from "react"

const GetData = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if(!response.ok){
                throw new Error(
                    `http error ${response.status}`
                )
            }
            return response.json()
        })
        .then((actualData) => {
            setData(actualData);
            setError(null);
        })
        .catch((error) => {
            setError(error.message)
            setData(null)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return(
        <div>
            <h1>API Posts</h1>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <ul>
                {console.log(data)}
                {data && data.map(({id, name}) => (
                    <li key={id}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default GetData;