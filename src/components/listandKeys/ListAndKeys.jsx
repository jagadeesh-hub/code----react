import React, { Component } from 'react'

 class ListAndKeys extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
             arr:[{ name: "jagadeesh", age: 22, role: "developer" },
                 { name: "jag", age: 21, role: "dev" },
                 { name: "jagadeesh", age: 23, role: " front end developer" },
                 { name: "jagadeesh", age: 24, role: "devel" },
                 { name: "jagadeesh", age: 26, role: "per" },
                 { name: "jagadeesh", age: 25, role: "deve" },
             ]
         }
     }
     
    render() {
        return (
            <div>
                {
                
            // this.state.arr.reduce
                    // this.state.arr.reverse().map(i => <li>{i.age}</li>)
                    // this.state.arr.sort((a, b) => { return b.age - a.age }).map(i => <h2>{ i.age}</h2>)
                    // this.state.arr.filter(i => i.age <= 22).map(i => <h2>{ i.name}</h2>)
                //    this.state.arr.map((i, indx) => <table key={indx} border="1"><tbody><tr><td>{i.name}</td><td>{i.age}</td><td>{ i.role}</td></tr></tbody></table>)
                }
            </div>
        )
    }
}

export default ListAndKeys
