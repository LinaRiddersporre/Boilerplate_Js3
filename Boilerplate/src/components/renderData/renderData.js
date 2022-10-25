const RenderData = (props) => {
    return(
        <ul>
            {props.list.map((value, index) => {
                return(
                    <li key={index}>
                        <p>{value.firstName + ' ' + value.lastName + ' ' + value.age}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default RenderData