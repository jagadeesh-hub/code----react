import React from 'react'
import { BrowserRouter as Router, Link,Route,Switch } from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
const Home = () => {
    return (
        <div>
            <Router>
                <nav>
                    
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                    <Link to="/logout">Logout</Link>
                    
                </nav>
                <Switch>
              
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/logout" component={Logout} />
                    </Switch>
               
            



            </Router>
        </div>
    )
}

export default Home
