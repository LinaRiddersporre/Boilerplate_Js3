import ListElement from "../listElement/listElement";

const RenderData = (props) => {
    return(
        <ul>
            {props.list.map((value, index) => {
                return(
                    <ListElement key = {index} value = {value}/>
                )
            })}
        </ul>
    )
}

export default RenderData;