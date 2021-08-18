import React from "react"
class ClassComponents extends React.Component{
 
   constructor(props) {
       super(props)
   
       this.state = {
                
           names: ["a", "s", "d", "f", "g"],
           n1:""
    }
       
   }
   
    handleChange = (e) => {
        this.setState({[this.state.n1]:e.target.value})
  
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.n1)
    }
   
    render() {
        return <>
            <h2>hello class Component</h2>
            <form onSubmit={this.handleSubmit }>
                <input type="text" onChange={this.handleChange} />

                <button type="submit">ADD</button>
            </form>


            {
                this.state.names.map(i => <li>{ i } <button>edit</button> <button>delete</button></li>)
            }
        </>
    }
}
export default ClassComponents