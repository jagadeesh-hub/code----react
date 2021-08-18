import React,{useState} from 'react'

const ToDo = () => {
    const [state, setstate] = useState({
        item: "",
      

    })
    const [items, setitems] = useState([{}])



   console.log(state.item)


    const handleSubmit = () => {
        setitems(state.item)
        console.log(items)
    }
    
    return (
        <div>
            <input type="text"  onChange={(e)=>setstate({item:e.target.value}) } />
            <button type="submit" onClick={handleSubmit}>Submit</button>
           
            {
                items.map(i=>"j")
           }


         
        </div>
    )
}

export default ToDo
