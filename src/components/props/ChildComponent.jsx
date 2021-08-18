import React, { Component } from 'react'

 class ChildComponent extends Component {
     render(props) {
        this.props.mydata("jagadeesh")
        return (
            <div>
                <h2>this child component</h2>
                <h4> hello{ this.props.mydata}</h4>
                
            </div>
        )
    }
}

export default ChildComponent
