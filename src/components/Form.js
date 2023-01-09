import { useState } from "react" 

const Form = () => {

    const [userDetails, setUserDetails] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        repassword: ''
     })

    const handleInput = (event) => {
        const name = event.target.name
        const value = event.target.value

        setUserDetails({...userDetails, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let flag = true
        for (const [key, value] of Object.entries(userDetails)) {
            if(value.length === 0) {
                flag = false
                alert(`${key} can't be empty`)
            }
        }

        if(flag && userDetails.password !== userDetails.repassword)
            alert(`Password Don't Match`)

        if(flag) {
            console.log(JSON.stringify(userDetails, null, 3));
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type = 'text' autoComplete="off" name='username' value={userDetails.username} onChange={handleInput}/>
            <br />
            <label>Name</label>
            <input type = 'text'autoComplete="off" name='name' value={userDetails.name} onChange={handleInput}/>
            <br />
            <label>Email</label>
            <input type = 'email'autoComplete="off" name='email' value={userDetails.email} onChange={handleInput}/>
            <br />
            <label>Password</label>
            <input type = 'password'autoComplete="off" name='password' value={userDetails.password} onChange={handleInput}/>
            <br />
            <label>Confirm Password</label>
            <input type = 'password'autoComplete="off" name='repassword' value={userDetails.repassword} onChange={handleInput}/>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form