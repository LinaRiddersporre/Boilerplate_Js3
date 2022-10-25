const Form = (props) => {
    const formObject = {
        firstName: '',
        lastName: '',
        age: 0
    }
    const submitForm = (e) => {
        e.preventDefault()
        console.log(formObject)
        for(const item of e.target.children){
            item.value = ''
        }
        props.addNewUser(formObject)
    }


    return(
        <form onSubmit={submitForm} >
            <input type='text' required placeholder='Firstname' onChange={(event) => formObject.firstName = event.target.value } ></input>
            <input type='text' required placeholder='Lastname' onChange={(event) => formObject.lastName =event.target.value} ></input>
            <input type='number' required min='12' max='55' placeholder='Age' onChange={(event) => formObject.age = parseInt(event.target.value) } ></input>
            <input type='submit' placeholder='Submit'></input>
        </form>
    )
}

export default Form