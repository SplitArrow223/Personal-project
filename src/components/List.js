import React, { Component } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert';
import Golf from './../Golf-Ball-icon.png';

export default class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       score: '',
       date: '',
       edit: false,
       round: 0,
       course: 0
    };
  };

  render() {
    const {round, course, score, date} = this.state;
    const rounds = this.props.rounds.map(round => {
      return (
        <Display>
          <h2>Score: {round.score}</h2>
          <h2>Date: {round.round_date}</h2>
          <img className='golf-ball' src={Golf} alt="golf ball"></img>
          <div>
          <button onClick={() => { swal({
            title: 'Are You Sure You Want To Remove This Round?',
            text: 'If So Click "OK"!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              this.props.removeRound(round.round_id, round.course_id).then(
                swal('Your Round Was Deleted', {icon: 'success'})
              )
              }else swal('Your Round Is Safe!')
          })}} style={{color: '#6d161b'}}  >delete</button>
          
          <button onClick={() => this.setState({edit: true, round: round.round_id, course: round.course_id})} style={{padding: '5px 28px', color: 'green'}} >edit</button>
          </div>
        </Display>
      )
    })
    return this.state.edit ? (
      <Update>
      <Input primary>
          <span>Edit Score:</span>
          <input  onChange={(e) => this.setState({score: e.target.value })} 
           value={score} type="text" placeholder='Your Score' />
        </Input>
        <Input primary>
          <input  onChange={(e) => this.setState({date: e.target.value })} 
           value={date} type="text" placeholder='date' />
        </Input>
        <button onClick={() => this.props.editRound(round, course, score, date)
          .then(this.setState({ 
            edit: !this.state.edit,
            score: '',
            date: ''
          }))}>Update</button>
      </Update>
    ) : (
      <Main>
        {rounds}
        
      </Main>
    )
  }
}

const Display = styled.div`
  width: 300px;
  height: 230px;
  background-color: #d3e0e0;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 14px ridge #1C6EA4;
  color: #163a63;
  border-radius: 5px;
  
  button {
    background-color: #a8b6b6;
    border: none;
    color: #163a63;
    font-size: 20px;
    font-weight: 600;
    padding: 5px 15px;
    border-radius: 10px;
    margin: 0px 4px;
    box-shadow: rgb(0, 0, 0) 5px 5px 10px 5px;
    border: 8px outset rgb(28, 110, 164); 
    display: inline-block;
    margin-bottom: -100px;
    outline: none;
    &:hover {
      color: rgb(6, 48, 6));
      background-color: #d3e0e0;
      border-color: rgb(6, 48, 6)
    }
  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .golf-ball {
    position: absolute;
    opacity: 0.3;
    width: 200px;
    
  }
  @media (max-width: 600px) and (min-width: 250px) {
    width: 60vw;
  }
`;
const Input =  styled.p`
  background-color: ${props => (props.primary ? '#d3e0e0' : '#998')};
  font-weight: 700;
  border-radius: 5px;
  border: 4px solid #6d161b;
  padding: 13px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #163a63;
  width: 80%;
  input {
    border-radius: 3px;
    border: none;
    padding: 5px;
    font-weight: 700;
    font-size: 18px;
    background: none;
    color: #163a63;
    border-bottom: 2px dashed #163a63; 
    width: 85%; 
  }
`;
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5em;

`
const Update = styled.div`
  width: 40vw;
  height: 300px;
  background-color: #d3e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 20px solid green;
  border-radius: 8px;
  border: 18px ridge #1C6EA4;
  margin-top: 10rem;
  Button {
    width: 50%;
    padding: 10px;
    color: #163a63;
    background-color: #d3e0e0;
    border: 5px solid #6d161b;
    &:hover {
      color: #163a63;
      background-color: #a8b6b6;
    }
  }
  @media (max-width: 600px) and (min-width: 250px) {
    width: 80vw;
    
  }
`;