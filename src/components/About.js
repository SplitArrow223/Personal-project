import React, { Component } from 'react';
import styled from 'styled-components';

export default class About extends Component {
  render() {
    return (
      <Wrapper>
       
        <section>
          <h1 style={{color: '#6d161b', marginTop: '80px'}}>
            <span>W</span>
            <span>E</span>
            <span>L</span>
            <span>C</span>
            <span>O</span>
            <span>M</span>
            <span>E</span>
            <span>!</span>
          </h1>
        </section>
        <h3 style={{fontSize: '40px'}} >This is my cool project!</h3>
        <h3 style={{fontSize: '40px'}} >it's not much, but sure was fun to make</h3>
       
      </Wrapper>
    )
  }
}
const Wrapper = styled.div`
  width: 70vw;
  background-color: darkgray;
  height: 60vh;
  border: 18px ridge #1C6EA4;
  box-shadow: 5px 5px 40px   rgb(16, 18, 20);
  color: #153b66;
  font-family: 'Kaushan Script';
  @media screen and (max-width: 950px) {
  width: 90vw;
  
}
`;

