import React, { Component } from 'react'

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"jagadeesh"
        }
    
      console.log("lifecycle A construction")
    }
    static getDerivedStateFromProps() {
        console.log("lifecycle A getderived state from props")
        return
    }

    shouldComponentUpdate() {
        console.log("shouldcomponent update")
        return true
    }
    componentDidMount() {
        // all the ajax call r called in this method 
        console.log("lifecycle A componentDidMount")
    }
    getSnapshotBeforeUpdate(preState, preProps) {
        console.log(preState)
        
    }
    componentDidUpdate() {
        console.log("should component update")
    }
    render() {
        console.log("render")
        return (
            <div> 
                <h2>hello componentDidMount</h2>
                <button onClick={()=>this.setState({name:"prakesh"})}>change state</button>
            </div>
        )
    }
}

export default LifeCycleA
