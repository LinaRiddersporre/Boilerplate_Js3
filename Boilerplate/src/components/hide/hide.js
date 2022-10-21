import React from "react";

export default class Hide extends React.Component{

    componentWillUnmount(){
        console.log('unmount')
    }
    render(){
        return(
            <h3>HIDE</h3>
        )
    }
}