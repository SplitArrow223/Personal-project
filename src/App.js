import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Private from "./components/Private/Private";
import About from './components/About';
import Icon from './Minion-icon.png';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: false,
      showAbout: false,
      showWelcome: true,
      showMenu: false
    };
  }

  render() {
    return (
      <HashRouter>
        
        <Switch>
          <Route component={Private} path="/private" />
          <Route
            path="/"
            exact
            render={() => {
              return (
                <div className='App'>
                  <div className={this.state.showLogin ? 'login slide' : 'login'}>
                    <Login />
                  </div>
                  <div className={this.state.showAbout ? 'about slide2' : 'about'} >
                     <About />
                  </div>
                  <div className={this.state.showMenu ? 'menu menu-slide' : 'menu'}>
                  <button className='menu-links' onClick={() => {
                          this.setState({showLogin: !this.state.showLogin,
                          showAbout: false, showMenu: false})
                          }} >LOGIN</button>

                        <button className="menu-links" onClick={() => {
                          this.setState({showAbout: !this.state.showAbout,
                          showLogin: false, showMenu: false})
                          }} >ABOUT</button>
                  </div>
                  <header>
                    <div className='icon' style={{
                      display: 'flex', 
                      flexDirection: 'row',
                      alignItems: 'center'
                    }} >
                    <img className='img' src={Icon} alt="golf-ball" ></img>
                    <h3 className='h3' >
                      <span>M</span>
                      <span>i</span>
                      <span>n</span>
                      <span>i</span>
                      <span>o</span>
                      <span>n</span>
                      <span>G</span>
                      <span>o</span>
                      <span>l</span>
                      <span>f</span>
                    </h3> 
                    </div>
                    <nav>
                      <div >
                        <button className='nav-links' onClick={() => {
                          this.setState({showLogin: !this.state.showLogin,
                          showAbout: false, showWelcome: false})
                          }} >LOGIN</button>

                        <button className="nav-links" onClick={() => {
                          this.setState({showAbout: !this.state.showAbout,
                          showLogin: false, showWelcome: false})
                          }} >ABOUT</button>
                      </div>
                      <div className='nav-icon'
                      onClick={() => this.setState({
                        showMenu:!this.state.showMenu,
                        showWelcome: false
                      }) }>
                       <div></div>
                      </div>
                    </nav>
                  </header>
                  
                  <div className={this.state.showWelcome ? 'welcome ' : 'welcome welcome-slide'}>
                    <h1 >
                           <span>W</span>
                           <span>E</span>
                           <span>L</span>
                           <span>C</span>
                           <span>O</span>
                           <span>M</span>
                           <span>E</span>
                           <span>!</span>
                    </h1>
                    <div className='welcome-text'>
                    <h2>LETS GET STARTED !</h2>         
                    <h2>Click the login button located at the top to log in,  </h2>  
                    <h2>or create a new account!</h2>
                    </div>
                  </div> 
                  <footer>
                    @ copywright
                  </footer>   
                </div>

              );
            }}
          />
        </Switch>
        
      </HashRouter>
    );
  }
}

export default App;
