import React,{useState} from 'react'
import Form from './Form'
import TodoList from './TodoList'

const ToDo = () => {
    const [input, setinput] = useState("")
    const [todos, settodos] = useState([])
    return (
        <>
            <header><h2>To-Do</h2></header>
            <main>
                <Form input={input}
                    setinput={setinput}
                    todos={todos}
                    settodos={ settodos}/>
            </main>
            <footer>
                <TodoList todos={todos} settodos={ settodos}/>
            </footer>
        
        </>
    )
}

export default ToDo
