import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setinput, todos, settodos }) => {
    


    const handleSubmit = e => {
        e.preventDefault()
        settodos([...todos, { id: uuidv4(), title: input, completed: false }])
        setinput("")
    }

    const handlechange = e => {
        setinput(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input}
                    placeholder="Enter the to-do's"
                    onChange={handlechange}
                    required
                /> <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form
