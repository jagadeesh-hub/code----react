import React,{useState,useEffect} from 'react'
import axios from "axios"
const GetSinglePost = () => {
    const [posts, setposts] = useState([])
    const [id, setid] = useState(1)
    const [btnclick, setbtnclick]=useState(1)



    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${btnclick}`).then(res => {
            console.log(res.data)
            setposts(res.data)
        }).catch(err => {
            console.log(err)
        })
      
    }, [btnclick])

    return (
        <div>
            <input type="text" onChange={(e)=>setid(e.target.value)} /> <button onClick={()=>setbtnclick(id)}>fetch post</button>
            <h2>
            {
                posts.title
                }
                </h2>
        </div>
    )
}

export default GetSinglePost
