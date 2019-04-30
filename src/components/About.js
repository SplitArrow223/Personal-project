import React, { Component } from 'react';
import styled from 'styled-components';

export default class About extends Component {
  render() {
    return (
      <Wrapper>
        <h1 style={{fontSize: '45px'}} >About!</h1>
        <h1>This is my pretty sweet project</h1>
        
      </Wrapper>
    )
  }
}
const Wrapper = styled.div`
  width: 70vw;
  background-color: darkgray;
  background-repeat: no-repeat;
  background-size: cover;
  height: 55vh;
  border: 18px ridge #1C6EA4;
  box-shadow: 5px 5px 40px   rgb(16, 18, 20);
  color: #153b66;
`;

