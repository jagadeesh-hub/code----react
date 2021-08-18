import React, { Component } from 'react'
import axios from "axios"
class GetPosts extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             posts: [],
             error:""
         }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            console.log(res.data)
            this.setState({posts:res.data})
        }).catch(err => {
            console.log(err)
            this.setState({error:"Error while retriving the data"})
        })
    }
     
    render() {
        const {posts ,error}=this.state
        return (
            <>
                {
                    posts.length ? posts.map(i => <li key={i.id}>{ i.title}</li>):null

                }
                {
                    error ? <div>{ error}</div>:null
                }
                
            </>
        )
    }
}

export default GetPosts
