import React,{useState} from 'react'

const StateObject = () => {
    const [name, setname] = useState({ first: "", last: "" })
    const [data] = useState([])


    const handleChange = (e) => {
        setname({ ...name,
             [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        data.push(name)
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="first" value={name.first} onChange={ handleChange}/> <br/>
                <input type="text" name="last" value={name.last} onChange={ handleChange}/> <br />
                <button type="submit">Submit</button>

            </form>
            <div>
                  {
                    data.map((i, idx) => <ul key={idx}>{i.last} ,{ i.first}</ul>)
           }
          </div>
            
        </div>
    )
}

export default StateObject
