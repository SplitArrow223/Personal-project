import React, { Component } from "react";
import axios from 'axios'
import styled from 'styled-components'
import {Button} from '../Button'
import {withRouter} from 'react-router-dom'

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
        else alert('registration failed')
            
    }
    async login() {
        const {username, email, password} = this.state;
        const res = await axios.post('/auth/login', {username, email, password});
        if (res.data.loggedIn) this.props.history.push('/private')
        else alert('login failed')
    }
  render() {
    return (
      <Wrapper >
    
        <Input primary>
          <span>Username:</span>
          <input onChange={(e) => this.setState({username: e.target.value })} value={this.state.userName} type="text" />
        </Input>
        <Input primary>
          <span>Email:</span>
          <input onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} type="text" />
        </Input>
        <Input primary>
          <span>Password:</span>
          <input onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} type="text" />
        </Input>
        <div>
          
          <Button  onClick={() => this.register()} padding='15px' >Register</Button>
          
          <Button onClick={() => this.login().then(this.setState({username: '', email: '', password: ''}))} padding='15px' >Log in</Button>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(Login)

const Input =  styled.p`
  background-color: ${props => (props.primary ? '#163a63' : '#998')};
  font-weight: 700;
  border: none;
  border-radius: 5px;
  width: 350px;
  padding: 13px;
  font-size: 20px;
  input {
    border-radius: 3px;
    border: none;
    margin-left: 10px;
    padding: 5px;
    width: 230px;
    font-weight: 700;
    font-size: 18px;
    background-color: #ddd
  }
`;

const Wrapper = styled.div`
  width: 500px;
  background-color: #0f1e1d2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  Button {
    width:160px;
    margin: 5px 20px
  }
  
`


