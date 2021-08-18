import React from 'react'

const HeroComp = ({ name }) => {
    if (name === "jagadeesh") {
        throw new Error("fsjsgjshs")
    }
    return (
        <div>
            <h2>hello { name}</h2>
        </div>
    )
}

export default HeroComp
