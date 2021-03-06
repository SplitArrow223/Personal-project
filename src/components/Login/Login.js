import React, { Component } from "react";
import axios from 'axios';
import styled from 'styled-components';
import {Button} from '../Button';
import {withRouter} from 'react-router-dom';
import swal from 'sweetalert';

class Login extends Component {
    constructor(){
        super()
        this.state = {
          username: '',
          email: '',
          password: ''
        }
    }
    async register() {
        const {username, email, password } = this.state;
        const res = await axios.post('/auth/register', {username, email, password } );
        if (res.data.loggedIn) this.props.history.push('/private')
        else swal('Registration Failed!', 'Email Already In Use!', 'warning')
            
    }
    async login() {
        const {username, email, password} = this.state;
        const res = await axios.post('/auth/login', {username, email, password});
        if (res.data.loggedIn) this.props.history.push('/private')
        else swal('Login Failed', 'Incorrect Username, Email Or Password', 'error')
    }
  render() {
    return (
      <Wrapper >
        <h2 style={{textShadow: '5px 5px 5px rgb(16, 18, 141) ', 
             color: 'darkgray', 
             letterSpacing: '3px',
             position: 'relative',
             top: '0px',
             fontFamily: 'Kaushan Script',
             fontSize: '40px',
             margin: '0px'}} >
         GOLFERS<br/>ANONYMOUS  
        </h2>
        <Input primary>
          <span>Username:</span>
          <input onChange={(e) => this.setState({ username: e.target.value })}
           value={this.state.username} 
           type="text" 
           placeholder='Input Username' />
        </Input>
        <Input primary>
          <span>Email:</span>
          <input onChange={(e) => this.setState({ email: e.target.value })}
           value={this.state.email}
            type="text" 
            placeholder='Input Email'/>
        </Input>
        <Input primary>
          <span>Password:</span>
          <input onChange={(e) => this.setState({ password: e.target.value })}
           value={this.state.password}
            type="password" 
            placeholder='Password'/>
        </Input>
        <div>
          
          <Button  onClick={() => this.register()} padding='15px' >Register</Button>
          
          <Button onClick={() => this.login().then(this.setState({ password: ''}))} padding='15px' >Log in</Button>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(Login)

const Input =  styled.p`
  background-color: ${props => (props.primary ? '#a8b6b6' : '#998')};
  font-weight: 700;
  border: none;
  border-radius: 8px;
  width: 350px;
  padding: 10px;
  margin: 0px;
  font-size: 20px;
  border: 3px solid rgb(38, 87, 161);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    border-radius: 3px;
    border: none;
    padding: 5px;
    width: 230px;
    font-weight: 700;
    font-size: 18px;
    background: none;
    color: #163a63;
    border-bottom: 3px dashed #163a63;
  }
  @media(max-width: 600px) and (min-width: 250px) {
    width: 250px;
    padding: 5px;
    font-size: 15px;
  }
`;

const Wrapper = styled.div`
  width: 40vw;
  height: 70vh;
  padding-top: 0px;
  background-color: #0f1e1d2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  border: 8px outset rgb(38, 87, 161);
  box-shadow: 5px 5px 40px rgb(38, 87, 161);
  background-image: url('https://images.unsplash.com/photo-1544914379-806667cd9489?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
  
}
  Button {
    width:160px;
    margin: 5px 20px;
    &:hover {
      color: whitesmoke;
      background-color: #163a6399;
    }
  }
  @media(max-width: 600px) and (min-width: 250px) {
    width: 90vw;
    Button {
      width: 120px;
      color: whitesmoke;
      background-color: #163a6399;
    }
  }
  
`;


