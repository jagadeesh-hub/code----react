import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
// props are the properties(object)
//props helps to pass the data or infromation from one component to another component
//props are immutable they can't change in the component
// props are as a attribute 
export default class PROPScomponent extends Component {
    

      childData = (data) => {
     console.log(data)
 }
    render() {



        return (
            <div>
                <h2>this is parent component</h2>
                <ChildComponent mydata={ this.childData}/>
            </div>
        )
    }
}
