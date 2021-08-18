import React, { Component } from 'react'

class STATEcomponent extends Component {
    //state is a simply js object
    //state r the heart of the component 
    //which contains the data or information about the component
    //state are muttable 
    //state can be changed only by setState method
    //this key is used
 constructor(props) {
     super(props)
 
     this.state = {
          someThing:"ssss"
     }
 }
 

    render() {
        return (
            <div>
                <h2>{this.state.someThing}</h2>
                <button onClick={()=>this.setState({someThing:"ppppp"})}>click</button>
                
            </div>
        )
    }
}

export default STATEcomponent
