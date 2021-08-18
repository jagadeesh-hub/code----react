import React,{useState} from 'react'

const CounterState = () => {
    const [items, setitems] = useState([])

    const increament = () => {
        setitems([...items, {id:items.length,value:Math.random()}])
    }

    
    return (
        <div>
            <button onClick={increament}>Add </button>


            <div>
                 {
                    items.map(i => <ul><li>{i.id}</li> <li>{ i.value}</li>
                    </ul>)
            }
           </div>
        </div>
    )
}

export default CounterState
