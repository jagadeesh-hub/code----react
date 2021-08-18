import React, { Component } from 'react'
import HigherOrderComp from './HigherOrderComp'

class ClickCounter extends Component {
 
    render() {
  
        return (
            <div>
                <button onClick={this.props.increament}> {this.props.name} clicked { this.props.counter} time</button>
            </div>
        )
    }
}

export default HigherOrderComp(ClickCounter)
