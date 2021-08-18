import React,{useContext} from 'react'
import { userContext } from './ComponentA'
const ComponentC = () => {
    const context = useContext(userContext)
    return (
        <div>
            <h2>hello { context}</h2>
        </div>
    )
}

export default ComponentC
