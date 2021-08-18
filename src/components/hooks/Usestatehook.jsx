import React,{useState} from 'react'

const Usestatehook = () => {
    const [state, setstate] = useState(0)

    const increament = () => {
        setstate(state+1)
    }
    const dercement = () => {
        setstate(state-1)
    }
    return (
        <div>
            <h2>hiii { state}</h2>
            <button onClick={increament}>Add</button>
            <button onClick={dercement}>Decresce</button>
        </div>
    )
}

export default Usestatehook
