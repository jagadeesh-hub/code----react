import React from 'react'
import { useHistory } from 'react-router-dom'

const Logout = () => {
    const history = useHistory()
    

    const redirect = () => {
        history.push("/register")
    }
    return (
        <div>
            <h2>logout</h2>

            <button onClick={redirect}>Logout</button>
        </div>
    )
}

export default Logout
