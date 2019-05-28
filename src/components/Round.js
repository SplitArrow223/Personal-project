import React, {Component} from "react";
import styled from "styled-components";
import { Button } from './Button';
import { connect } from "react-redux";
import { addRound } from './../ducks/reducer'

class Scores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: '',
      date: '',
  
      addScore: false
    };
  }

  render() {
    const { score, date} = this.state;
    return (
   
      <Wrapper>
      
        <Inputs primary>
          <span>Add Your Score:</span>
          <input  onChange={(e) => this.setState({score: e.target.value })} 
           value={score} type="text" placeholder='Your Score' />
        </Inputs>
        <Inputs primary>
          <input  onChange={(e) => this.setState({date: e.target.value })} 
           value={date} type="text" placeholder='date' />
        </Inputs>
        <Button onClick={() => this.props.addRound(this.props.courseId, score, date)
          .then(this.setState({ 
            addScore: !this.state.addScore,
            score: '',
            date: ''
          }))}>Add</Button>
      </Wrapper>
    ) 
    
  }
}
const mapPropsToState = reduxState => reduxState;

export default connect(mapPropsToState, {addRound})(Scores);

const Wrapper = styled.div`
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
    color: #6d161b;
    background-color: #a8b6b6;
    background-image: none;
    &:hover {
      color: #6d161b;
      background-color: #a8b6b6;
      border-color: rgb(6, 48, 6)
    }
  }
  @media (max-width: 600px) and (min-width: 250px) {
    width: 80vw;
    
  }
`;
const Inputs =  styled.div`
  background-color: ${props => (props.primary ? '#d3e0e0' : '#998')};
  font-weight: 700;
  border-radius: 5px;
  border: 4px solid  #6d161b;
  padding: 13px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  @media screen and (max-width: 950px) {
    
  }
`;