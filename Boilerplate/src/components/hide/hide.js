import React from "react";

export default class Hide extends React.Component{

    componentWillUnmount(){
        console.log('unmount')
        this.props.
        clearInterval({})
    }
    render(){
        return(
            <h3>HIDE</h3>
        )
    }
}