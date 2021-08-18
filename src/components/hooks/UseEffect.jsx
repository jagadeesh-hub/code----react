import React,{useState,useEffect} from 'react'
import axios from "axios"
const UseEffect = () => {
const [state, setstate] = useState([])


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            console.log(res)
            setstate(res.data)
        }).catch(err => {
            console.log(err)
        })
    
  
}, [])

    return (
        <div>
            {
                state.map((item) => {
                    return (
                        <div key={item.id}><h2>{ item.title}</h2></div>
                    )
                })
            }
        </div>
    )
}

export default UseEffect
