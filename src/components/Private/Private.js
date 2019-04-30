import React, { Component } from "react";
import "./Private.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getData } from "../../ducks/userReducer";
import {getAllRounds, getAllCourses, addRound, removeRound, editRound, getHandicap} from '../../ducks/reducer';
import { Button } from "../Button";
import styled from "styled-components";
import Courses from '../courses';
require('dotenv').config();

const {REACT_APP_LOGOUT} = process.env

class Private extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showHandicap: false,
      showCourses: false,
      showLogout: false,
      showMenu: false
    };
  }

  componentDidMount() {
    this.props.getData();
    this.props.getAllCourses();
    this.props.getHandicap();
  };

  render() {
    const { username, id } = this.props.user.user;
    const {handicap} = this.props.course;
    return (
      <Wrapper>
        <div className="body">
           <div className={this.state.showCourses ? 'courses courses-slide' : 'courses'}>
              <Courses courses={this.props.course.courses}
              addRound={this.props.addRound} 
              getAllRounds={this.props.getAllRounds}
              rounds={this.props.course.rounds}
              removeRound={this.props.removeRound}
              editRound={this.props.editRound}
              getHandicap={this.props.getHandicap}
              />
             
            </div> 
             <div className={this.state.showHandicap ? 'handicap handicap-slide' : 'handicap'} >
              <button className='B'>Your Handicap: {handicap}</button>
            </div>
             <div className={this.state.showLogout ? 'logout logout-slide' : 'logout'} >
              <a href={REACT_APP_LOGOUT}>
               <button className='logout-btn'>Logout!</button>
              </a>
            </div>
            <div className={this.state.showMenu ? 'menu2 menu-slide2' : 'menu2'} >
               <button className="menu2-links"
                onClick={() => this.setState({showCourses: !this.state.showCourses})}
                >Courses</button>
              
                <button className="menu2-links"
                  onClick={() => 
                   this.setState({
                    showHandicap: !this.state.showHandicap, 
                    showMenu: false,
                    showLogout: false })}
                >Handicap</button>
             
                <button className="menu2-links" padding="15px"
                  onClick={() => this.setState({
                    showLogout: !this.state.showLogout,
                    showMenu: false,
                    showHandicap: false})}
                > Logout
                </button>
            </div>
          <header className="header">
            Hello {username}! 
            <nav >
              <button className="nav-links"
                onClick={() => this.setState({showCourses: !this.state.showCourses})}
              >Courses</button>
              
                <button className="nav-links"
                  onClick={() => 
                   this.setState({
                    showHandicap: !this.state.showHandicap,  showLogout: false })}
                >Handicap</button>
             
                <button className="nav-links" padding="15px"
                  onClick={() => this.setState({showLogout: !this.state.showLogout,  showHandicap: false})}
                > Logout
                </button>
                <div className='nav-icon2'
                      onClick={() => this.setState({
                        showMenu: !this.state.showMenu,
                        showLogout: false,
                        showHandicap: false
                      }) }>
               <div></div>
               </div>
            </nav>
            
          </header>
            
            
          {id ? (
            <> 
            </>
          ) : (
            <alert>
              <h1>Please log in!</h1>
              <Link to="/">
                <Button padding="15px 70px">Login</Button>
              </Link>
            </alert>
          )}
        </div>
        
      </Wrapper>
    );
  }
}
const mapState = reduxState => reduxState;

export default connect(
  mapState,
  { getData, getAllRounds, getAllCourses, removeRound, editRound, addRound, getHandicap }
)(Private);

const Wrapper = styled.div`
  nav {
    margin-right: 2em;
  }
  p {
    margin-left: 1em;
  }
  alert {
    background-color: whitesmoke;
    position: fixed;
    top: 8em;
    width: 40%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    border: 4px solid #153b66;
  }
`;

