import React, { Component } from 'react';
import styled from 'styled-components';

export default class About extends Component {
  render() {
    return (
      <Wrapper>
        <h1>About text</h1>
        <h3>This is my pretty sweet project</h3>
        
      </Wrapper>
    )
  }
}
const Wrapper = styled.div`
  width: 70vw;
 
  height: 55vh;
  border: 20px solid gray;
  border-radius: 30px
  
`


