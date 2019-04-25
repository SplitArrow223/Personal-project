import React, { Component } from 'react';
import Round from './Round';
import styled from 'styled-components';

export default class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       score: '',
       date: '',
       edit: false
    }
  }
  render() {
    const {score, date} = this.state;
    const rounds = this.props.rounds.map(round => {
      return (
        <div>
          <h2>Score: {round.score}</h2>
          <h2>Date: {round.round_date}</h2>
          <button onClick={this.props.removeRound(round.rounds_id)} >delete</button>
          <button onClick={this.props.editRound()} >edit</button>
        </div>
      )
    })
    return (
      <div>
        {rounds}
        
      </div>
    )
  }
}

