import React from "react";

class UserForm extends React.Component {
    inputValues = {
        firstName: '',
        lastName: '',
        password: '',
        passwordCheck: '',
        gender: ''
    }

    setGender = (event) => {
        console.log(event.target.value);
        this.inputValues.gender = event.target.value
        console.log(this.inputValues)
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputValues)
    }

    handleInput = (event) => {
        this.inputValues.firstName = event.target.value
        console.log('bajskille')
    }

    checkPassword = () => {
        console.log(this.input)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Namn:</h3>
                <input type= 'text' onChange={this.handleInput}></input>
                <h3>Efternamn:</h3>
                <input type='text'></input>
                <h3>Lösenord:</h3>
                <input type={"password"}></input>
                <h3>Bekräfta lösenord:</h3>
                <input type={"password"}></input>
                <div onChange={this.setGender}>
                    <p>Male</p>
                    <input type='radio' value='male' name="gender" ></input>
                    <p>Female</p>
                    <input type='radio' value='female' name="gender" ></input>
                    <p>Other</p>
                    <input type='radio' value='other' name="gender" ></input>
                </div>
                <button>Skicka</button>
            </form>
        )
    }
}

export default UserForm;