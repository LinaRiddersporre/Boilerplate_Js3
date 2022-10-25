

const ListElement = (props) => {
        return(
            <li>
                <p>{props.value.firstName + ' ' + props.value.lastName + ' ' + props.value.age}</p>
            </li>
        )
}

export default ListElement