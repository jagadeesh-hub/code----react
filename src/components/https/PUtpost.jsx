import React, { Component } from 'react'
import axios from "axios"
class PUTpost extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userId:"",title:"",body:""
         }
    }
    handlleChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = e => { e.preventDefault()
        console.log(this.state)
        axios.put("https://jsonplaceholder.typicode.com/posts/1", this.state).then(res => {
            console.log(res)
        }).catch(err=>console.log(err))

    }
       
    
     
    render() {
        const {userId,title,body}=this.state
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={ this.handlleChange}/>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={ this.handlleChange} />
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={ this.handlleChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                
            </>
        )
    }
}

export default PUTpost
