import React, { Component } from 'react'

export class ToDo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            item: "",
            items:[]
        }
    }
    // handleChange = e => {
    //     let name = e.target.name
    //     let value=e.target.value
    //     this.setState({item:{[name]:value}})

    //     console.log(this.state.item)
    // }
    handleSubmit = () => {
        const item = this.state.item
        const items = this.state.items
        items.push(item)
        this.setState({items:items})
   }
    render() {
    
        return (
            <div>
              
                        <input type="text" name="item" onChange={(e)=>{this.setState({item:e.target.value})} } />
                <button onClick={this.handleSubmit}>Add</button>



                <div>
                    {
                        this.state.items.map((item) => {
                            return (
                                <p>{ item}</p>
                            )
                        })
                }
                    </div>
          
            </div>
        )
    }
}

export default ToDo
