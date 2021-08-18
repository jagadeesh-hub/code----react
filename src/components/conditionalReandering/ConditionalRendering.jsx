import React from 'react'

class ConditionalRendering extends React.Component{

constructor(props) {
    super(props)

    this.state = {
         cdt:true
    }
}




    
    render() {
    //   (this.state.cdt)? (return(<h2> hello</h2>)) : (return <h2>hiii</h2>)

        return (
            this.state.cdt? (<><h2>hello</h2><button onClick={()=>this.setState({cdt:false})}>Show More </button></>):(<><h2>hiii</h2><button onClick={()=>this.setState({cdt:true})}>Show less</button></>)
        )
        
        // if (this.state.cdt) {
        //     return (<><h2>hello </h2><button onClick={()=>this.setState({cdt:false})}>Show More </button></>)
            
        // } else {
        //     return (<><h2>hiii Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, molestias deserunt sint nemo
        //         aliquid qui soluta dicta! A, delectus ipsam.</h2> <button onClick={()=>this.setState({cdt:true})}>Show less</button></>)
        // }
    }
}
export default ConditionalRendering