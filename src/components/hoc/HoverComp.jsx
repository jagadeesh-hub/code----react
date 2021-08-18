import React, { Component } from 'react'
import HigherOrderComp from './HigherOrderComp'

export class HoverComp extends Component {
   
    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.increament}>  Hovered { this.props.counter} times</h2>
            </div>
        )
    }
}

export default HigherOrderComp(HoverComp)
