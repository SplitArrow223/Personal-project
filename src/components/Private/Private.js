import React, { Component } from "react";
import "./Private.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getData } from "../../ducks/userReducer";
import {getAllRounds, getAllCourses, addRound, removeRound, editRound} from '../../ducks/reducer';
import { Button } from "../Button";
import styled from "styled-components";
import List from "./../List";
import Courses from '../courses';

class Private extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showList: false,
      showCourses: false,
      showLogout: false
    };
  }

  componentDidMount() {
    this.props.getData();
    this.props.getAllCourses();
  }

  render() {
    console.log(this.props)
    const { username, id } = this.props.user.user;
    return (
      <Wrapper>
        <div className="body">
           <div className={this.state.showCourses ? 'courses courses-slide' : 'courses'}>
              <Courses courses={this.props.course.courses}
              addRound={this.props.addRound} 
              
              />
            </div> 
             <div className={this.state.showLogout ? 'logout logout-slide' : 'logout'} >
              <a href="http://localhost:7200/logout">
               <button className='logout-btn'>Logout!</button>
              </a>
            </div>
            <div className={this.state.showList ? 'list list-slide' : 'list'} >
              <List rounds={this.props.course.rounds}
                getAllRounds={this.props.getAllRounds}
                removeRound={this.props.removeRound}
                editRound={this.props.editRound} />
            </div>
          <header className="header">
            <p style={{ marginLeft: "-7em"}}>Hello {username}! </p>
            <nav style={{ marginRight: "-7em" }}>
              <button className="nav-links"
                onClick={() => this.setState({showCourses: !this.state.showCourses})}
              >Courses</button>
              
                <button className="nav-links"
                  onClick={() => this.setState({
                    showList: !this.state.showList,
                    showCourses: false})}
                >Rounds</button>
             
                <button className="nav-links" padding="15px"
                  onClick={() => this.setState({showLogout: !this.state.showLogout})}
                > Logout
                </button>
             
            </nav>
            
          </header>
            
            
          {id ? (
            <div >
              
            </div>
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
  { getData, getAllRounds, getAllCourses, removeRound, editRound, addRound }
)(Private);

const Wrapper = styled.div`
  background-image: url("https://images.unsplash.com/photo-1546557938-189975d9426a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60");
  width: 100vw;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  bottom: 0;
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
const Section = styled.div``;
