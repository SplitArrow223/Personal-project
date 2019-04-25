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
      
        <Input primary>
          <span>Add Your Score:</span>
          <input  onChange={(e) => this.setState({score: e.target.value })} 
           value={score} type="text" placeholder='Your Score' />
        </Input>
        <Input primary>
          <input  onChange={(e) => this.setState({date: e.target.value })} 
           value={date} type="text" placeholder='date' />
        </Input>
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
  width: 400px;
  height: 300px;
  background-color: #d3e0e099;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 20px solid green;
  border-radius: 8px;
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
`;
const Input =  styled.p`
  background-color: ${props => (props.primary ? '#d3e0e0' : '#998')};
  font-weight: 700;
  border: none;
  border-radius: 5px;
  border: 4px solid green;
  padding: 13px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #163a63;

  input {
    border-radius: 3px;
    border: none;
    margin-left: 10px;
    padding: 5px;
    
    font-weight: 700;
    font-size: 18px;
    background: none;
    color: #163a63;
    border-bottom: 2px dashed #163a63;  
  }
`;