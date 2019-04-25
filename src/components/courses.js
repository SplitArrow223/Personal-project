import React, { Component } from 'react';
import styled from 'styled-components';
import Round from './Round'


export default class Courses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addRound: false,
      courseId: 0,
    }
  }
  
  render() {
    const courses = this.props.courses.map(course => {
      return (
        <Wrapper>
        <div style={{marginTop: '-50px', marginBottom: '20px'}} >
          <h2>{course.course_name  }</h2> 
          <h3>City: {course.course_location}</h3>
          <h3>Par: {course.course_par}</h3>
        </div>
        <div style={{marginBottom: '-20px', marginTop: '0px'}}>

        <button onClick={() => this.setState({
          addRound: !this.state.addRound,
          courseId: course.course_id 
          })}>Add Round</button>
        </div>
        </Wrapper>
        
      )
    })
    return this.state.addRound ? (
       <div>
         <Btn  onClick={() => this.setState({addRound: !this.state.addRound})} >
          X
         </Btn>
         <Round courseId={this.state.courseId}/>
       </div>
    ) : (
      <Display>
         {courses}
      </Display>
    )
  }
}
const Wrapper = styled.div`
  width: 350px;
  height: 220px;
  display: flex;
  flex-direction: column;
  background-color: #d3e0e0;
  align-items: center;
  justify-content: center;
  margin:20px;
  color: rgb(6, 48, 6);
  border-radius: 10px;
  border: 15px solid rgb(6, 48, 6);
  button {
    background-color: #a8b6b6;
    border: none;
    color: #163a63;
    font-size: 20px;
    padding: 5px 15px;
    border: 3px solid #163a63;
    border-radius: 10px;
    margin: 0px 4px;
    &:hover {
      color: rgb(173, 11, 11);
      background-color: #d3e0e0;
      border-color: rgb(173, 11, 11)
    }
  }
`;
const Display = styled.div`
  width: 100%;
  display: flex;
  margin-top: 9rem;
  flex-wrap: wrap
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