import React from "react";

class Form extends React.Component{
    inputDepositAmount = 0;
    total = 0;
    getDepositeAmount = (e) => {
        this.inputDepositAmount = parseInt(e.target.value)
        console.log(this.inputDepositAmount)
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.total = this.total + this.inputDepositAmount
        this.props.getTotalNumber(this.total)
    }

    render(){
        return(
            <form onSubmit={this.onSubmitHandler}>
                {console.log(this.props)}
                {console.log(this.props.hello)}

                <input 
                    placeholder="deposit amount" 
                    type='number' 
                    onChange={this.getDepositeAmount}/>
                <input type='submit' value='submit'></input>
            </form>
        )
    }
}

export default Form;