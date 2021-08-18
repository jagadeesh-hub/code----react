import React from 'react'

const TodoList = ({ todos, settodos }) => {
    
    const deleteI = ({id}) => {
        settodos(todos.filter((todo)=>todo.id !== id))
        
    }
    return (
        <div> 
            <h4>List</h4>
            {
                todos.map(todo => <li key={todo.id}><input type="text" value={todo.title} onChange={e => e.preventDefault()} /> <button><input type="checkbox" /></button>
                    <button>Edit</button> <button onClick={()=>deleteI(todo)}>Delete</button></li>)
            }
        </div>
    )
}

export default TodoList
