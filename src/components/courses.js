import React, { Component } from 'react';
import styled from 'styled-components';
import Round from './Round'
import List from './List';
import swal from 'sweetalert';

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
        <div style={{marginBottom: '-80px', marginTop: '0px', width: '100%', }}>

        <button className='rubberBand' onClick={() => this.setState({
          addRound: !this.state.addRound,
          courseId: course.course_id 
          })}>Add Round</button>
        <button onClick={() => this.props.getAllRounds(course.course_id).then(() => {
          if (this.props.rounds.length === 0) {
            swal("You don't have any rounds to display for this course!", "Try adding one!", "info")
          }else {
          this.setState({
          showRounds: !this.state.showRounds,
          })}})} >My Rounds</button>  
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
         <BackBtn className='rubberBand' onClick={() => this.setState({showRounds: !this.state.showRounds})} >{'<'}</BackBtn>
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
  border: 14px groove rgb(6, 48, 6);
  box-shadow: 8px 8px 20px rgb(16, 18, 20);
  text-align: center;
  
  button {
    background-color: #a8b6b6;
    border: none;
    color: #163a63;
    font-weight: 600;
    font-size: 20px;
    padding: 5px 15px;
    border: 3px solid #163a63;
    border-radius: 10px;
    margin: 0px 4px;
    box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;
    border: 8px outset rgb(28, 110, 164); 
    display: inline-block;
    margin-bottom: -60px;
    outline: none;
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
    color: #6d161b;
  }
  
  @media screen and (max-width: 950px) {
    width: 300px;
    .c-name {
      width: 302px;
      margin-top: -50px
    }
    button {
      padding: 5px 10px;
    }
  }
`;
const Display = styled.div`
  width: 100%;
  display: flex;
  margin-top: 9rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: none;
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
  top: 145px;
  outline: none;
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
    outline: none;
    &:hover {
      /* color: rgb(173, 11, 11);
      background-color: #d3e0e0;
      border-color: rgb(173, 11, 11);
      text-shadow: 2px 2px 3px rgb(173, 11, 11); */
      animation: rubberBand 1s linear infinite;
    } 
    @-webkit-keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.rubberBand {
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
} 
`;
