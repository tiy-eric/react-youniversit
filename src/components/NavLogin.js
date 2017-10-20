import React, { Component } from 'react'
import { NavItem, Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import {User} from '../models/User'
import "./Navigation.css"

class NavLogin extends Component {
    
    loginUser = event => {
        event.preventDefault();
        let form = event.target
  
        let user = new User();
        user.username = form.username.value;
        user.password = form.password.value
  
        this.props.login(user)
        browserHistory.push('/searchresults');
  
    }

    logoutUser = event => {
        event.preventDefault()
        this.props.logout()
        browserHistory.push('/');
    }
  
    render() {
        
        if(this.props.currentUser.id){
            
          let user = this.props.currentUser;
  
          return (
              <div>
                <Navbar.Brand >
                    <Link to="/searchresults"><h3 className="navlink">SearchResults</h3></Link>
                </Navbar.Brand>
                <Navbar.Brand>
                      <Link to="/edituser"><h3 className="navlink">Edit Preferences</h3></Link>
                </Navbar.Brand>
                <Navbar.Text pullRight >
                      <h1 className="navh1">Signed in as: {user.firstName} {user.lastName}</h1> <h4 className="navh4">(<Navbar.Link onClick={this.logoutUser} href="#" className="logoutlink">Logout</Navbar.Link>)</h4>
                </Navbar.Text>
            </div>
          )
  
        }

        return (
            <div>
                <form onSubmit={this.loginUser}>
                    <Navbar.Form pullRight >
                        <FormGroup>
                            <FormControl name="username" type="text" placeholder="username" />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <FormControl name="password" type="password" placeholder="password" />
                        </FormGroup>
                        {' '}
                        <Button type="submit">Login</Button>
                    </Navbar.Form>
                    <Navbar.Text pullRight>
                        <Link to="/register">Create an Account</Link> or Login
                    </Navbar.Text>
                </form>
            </div>
        );
    }
  }

  export default NavLogin;