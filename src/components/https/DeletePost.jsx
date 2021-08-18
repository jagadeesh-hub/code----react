import React, { Component } from 'react'
import axios from "axios"
class DeletePosts extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             posts: [],
             error:""
         }
    }
    delete = () => {
        
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${1}`).then(res => {
            console.log(res.data)
            // this.setState({posts:res.data})
            alert("deleted succeessfully")
        }).catch(err => {
            console.log(err)
            // this.setState({error:"Error while retriving the data"})
        })
    }
       
   
     
    render() {
        // const {posts ,error}=this.state
        // return (
        //     <>
        //         {
        //             posts.length ? posts.map(i => <li key={i.id}>{ i.title}</li>):null

        //         }
        //         {
        //             error ? <div>{ error}</div>:null
        //         }
                
        //     </>
        // )
        return <button onClick={this.delete}>Delete</button>
    }
}

export default DeletePosts
