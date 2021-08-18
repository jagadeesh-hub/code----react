import React ,{Component} from 'react'
//HOC is the function which takes a components as its parameter and return its new component
//basically used for sharing same logic or functionality between components
const HigherOrderComp = (OriginalComponent) => {

    class NewComponent extends Component{
         constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
    }
    increament = () => {
        this.setState({counter:this.state.counter+1})
    }
    
        render() {
            return <OriginalComponent counter={this.state.counter} increament={this.increament} {...this.props}/>
       }
    }
    return NewComponent
}

export default HigherOrderComp
