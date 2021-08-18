import React,{useState} from 'react'

const HookForm = () => {
    const [values, setvalues] = useState({
        username: "",
        useremail: "",
        userpassword: ""
    })
const [error,seterror]=useState({})

    const handleChange = e => {
        setvalues({
            ...values,
            [e.target.name]:e.target.value
        })
        
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
        seterror(validation(values))

    }
    const validation = (values) => {
        const error = {}
        if (!values.username) {
            error.username="Name is required"
            
        }
        if (!values.useremail) {
            error.useremail="Email is required"
            
        }
        if (!values.userpassword) {
            error.userpassword="Password is required"
            
        } else if (values.userpassword < 5) {
            error.userpassword='Password must be greater than 5'
            
        }
        return error
    }
     const {username,useremail,userpassword}=values
    return (
        
        <>
            
            <form onSubmit={handleSubmit} >
                <table>
                    <tbody>
                    <tr>
                        <td> <label htmlFor="">User Name :</label>
                        </td>
                        <td><input type="text" name="username" value={username}
                                onChange={handleChange} />
                                {error.username && <p>{ error.username}</p>}
                            </td>
                </tr>
              
                    <tr> <td><label htmlFor="">User Email:</label></td>
                            <td>                    <input type="email" name="useremail" value={useremail} onChange={handleChange} />
                       {error.useremail && <p>{ error.useremail}</p>}

</td>
                </tr>
                    <tr> <td><label htmlFor="">User password:</label></td>
                            <td>                    <input type="password" name="userpassword" value={userpassword} onChange={handleChange} />
                 {error.userpassword && <p>{ error.userpassword}</p>}

</td>
                </tr>
             
                <tr>    <button type="submit">Submit</button></tr>
 


</tbody>
 </table>

            </form>
           
        </>
    )
}

export default HookForm
