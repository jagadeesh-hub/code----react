import React from "react"
// jsx stand for javascript XML
//jsx is an js extension 
// jsx makes react code simple and easy understand
// it is combination of both js & HMTL
//jsx is not mandetary but recommended

class JSXcomponents extends  React.Component  {
    render() {

        // //with usin JSX
        // return (
        //     <div><h2>hello JSX</h2></div>
        // )




        //ex: with out  using jsx 
        return (React.createElement("ul",null,React.createElement("h2",null,"hello h2")))
            
    
    }
}
export default JSXcomponents