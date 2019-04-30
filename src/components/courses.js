import React, { Component } from 'react';
import styled from 'styled-components';
import Round from './Round'
import List from './List';
import Golf from './../Golf-Ball-icon.png'

export default class Courses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addRound: false,
      courseId: 0,
      showRounds: false
    }
  }
  
  render() {
    const courses = this.props.courses.map(course => {
      return (
        <Wrapper>
        <div style={{marginTop: '-15px', marginBottom: '50px'}} >
          <div className='c-name' >
            <h2>{course.course_name  }</h2> 
          </div>
          <h3>City: {course.course_location}</h3>
          <h3>Par: {course.course_par}</h3>
        </div>
          <img className='golf-ball' src={Golf} alt="golf ball"></img>
        <div style={{marginBottom: '-80px', marginTop: '0px', width: '100%', }}>

        <button onClick={() => this.setState({
          addRound: !this.state.addRound,
          courseId: course.course_id 
          })}>Add Round</button>
        <button onClick={() => this.props.getAllRounds(course.course_id).then(this.setState({
          showRounds: !this.state.showRounds,
          }))} >My Rounds</button>  
        </div>
        </Wrapper>
        
      )
    })
    return this.state.addRound ? (
       <div>
         <Btn  onClick={() => this.props.getHandicap().then(this.setState({addRound: !this.state.addRound}))} >
          X
         </Btn>
         <Round courseId={this.state.courseId}/>
       </div>
    ) : this.state.showRounds ? (
       <div>
         <BackBtn  onClick={() => this.setState({showRounds: !this.state.showRounds})} >{'<'}</BackBtn>
         <List rounds={this.props.rounds}
                removeRound={this.props.removeRound}
                editRound={this.props.editRound} 
                
                />
       </div> 
    ) : (  
      <Display>
         {courses}
      </Display>
    );
  }
}
const Wrapper = styled.div`
  width: 350px;
  height: 230px;
  display: flex;
  flex-direction: column;
  background-color: #d3e0e0;
  align-items: center;
  justify-content: center;
  margin:20px;
  color: rgb(6, 48, 6);
  border-radius: 10px;
  border: 18px groove rgb(6, 48, 6);
  box-shadow: 8px 8px 20px rgb(16, 18, 20);
  text-align: center;
  
  button {
    background-color: #a8b6b6;
    border: none;
    color: #163a63;
    font-size: 20px;
    padding: 5px 15px;
    border: 3px solid #163a63;
    border-radius: 10px;
    margin: 0px 4px;
    box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;
    border: 11px outset rgb(28, 110, 164); 
    display: inline-block;
    margin-bottom: -60px;
    &:hover {
      color: rgb(6, 48, 6));
      background-color: #d3e0e0;
      border-color: rgb(6, 48, 6)
    }
  }
  .c-name {
    margin-top: -45px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center
    background-color: #153b66ad;
    width: 352px;
    height: 50px;
    border-bottom: 10px double rgb(6, 48, 6);
    color: #95252d;
  }
  .golf-ball {
    position: absolute;
    opacity: 0.4;
    width: 180px;
    
  }
  @media screen and (max-width: 950px) {

  }
`;
const Display = styled.div`
  width: 100%;
  display: flex;
  margin-top: 9rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

`;
const Btn = styled.button`
  color: #163a63;
  font-size: 1.5em;
  background-color: #a8b6b6;
  font-size: 30px;
  font-weight: bold;
  padding: 4px 8px;
  border-color: #163a63;
  border-radius: 10px;
  position: absolute;
  right: -8px;
  top: -12px;
  &:hover {
      color: rgb(173, 11, 11);
      background-color: #d3e0e0;
      border-color: rgb(173, 11, 11)
  }
`;
const BackBtn = styled.button`
    background: none;
    color: #163a63;
    border: none;
    font-size: 50px;
    border-radius: 50%;
    margin: 0px 4px;
    position: fixed;
    top: 2em;
    left: 5px;
    padding: 0px 13px;
    text-shadow: 2px 2px 3px #163a63;
    &:hover {
      color: rgb(173, 11, 11);
      background-color: #d3e0e0;
      border-color: rgb(173, 11, 11);
      text-shadow: 2px 2px 3px rgb(173, 11, 11);
    }  
`;
