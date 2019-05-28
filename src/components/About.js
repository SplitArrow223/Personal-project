import React, { Component } from 'react';
import styled from 'styled-components';

export default class About extends Component {
  render() {
    return (
      <Wrapper>
        <div className='text'>
           <h1 style={{color: '#6d161b'}}>
             Hi There!
           </h1>
          <h3>This is a simple app designed to keep track of all the rounds of golf you play, at which courses you played them and it also keeps your handicap up to date </h3>
        </div>
         
       
      </Wrapper>
    )
  }
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;
  background: rgb(0, 0, 0, .2);
  height: 60vh;
  border: 14px outset #6d161b;
  box-shadow: 5px 5px 40px   rgb(16, 18, 20);
  color: rgb(0, 0, 0, .5);
  font-family: 'Merriweather', serif;
  .text {
    width: 90%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      margin: 0;
      font-size: 40px;
      background: -webkit-linear-gradient(left, #333, darkred, #333, darkred);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  @media screen and (max-width: 950px) {
    width: 90vw;
    .text h3 {
      font-size: 25px;
    } 
  }
`;

