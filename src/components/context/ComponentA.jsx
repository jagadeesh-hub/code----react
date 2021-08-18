import React from 'react'
import ComponentB from './ComponentB'
//context API provides a way to pass the data through component tree without having props manually at every level




export const userContext=React.createContext()
const ComponentA = () => {
    return (
        <userContext.Provider value="jagadeesh">
            
                <ComponentB/>

           
        </userContext.Provider>
    )
}

export default ComponentA
