import React, { Component } from 'react'

class FormComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             userName: "",
             Mail: "",
             gender:"male"
         }
    }
    handleSubmite = e => {
        e.preventDefault()
      console.log(this.state)
    }
     
    render() {
        const {userName,Mail,gender}=this.state
        return (
            <>
                <form onSubmit={this.handleSubmite} >
                     <div>
                    <label htmlFor="userName"> User Name</label>
                    <input type="text"
                        name="userName"
                        value={userName}
                        onChange={(e) => this.setState({ userName: e.target.value })}
                       required/>
                </div>
                
                <div>
                    <label htmlFor="Mail"> User Email</label>
                    <input type="email"
                        name="Mail"
                        value={Mail}
                        onChange={(e) => this.setState({ Mail: e.target.value })}
                    required/>
                </div>
                <div>
                    <select name="gender" value={gender} onChange={(e)=>{this.setState({gender:e.target.value})}}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Others</option>
                    </select>
                </div>
                    <div>
                        <button type="submit">Submit</button>

                 </div>
               </form>
                
            </>
        )
    }
}

export default FormComponent
