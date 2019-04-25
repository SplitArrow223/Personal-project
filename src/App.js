import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Private from "./components/Private/Private";
import About from './components/About';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: false,
      showAbout: false,
      showWelcome: true
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
                  <header>
                  
                    Golf Tracker
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
                    </nav>
                  </header>
                  
                  <div className={this.state.showWelcome ? 'welcome ' : 'welcome welcome-slide'}>
                    <h1 style={{fontFamily: 'Kaushan Script',
                                fontStyle: 'oblique',
                                fontSize: '40px'
                                }}>WELCOME!</h1>
                    <div className='welcome-text'>
                    <h2>LETS GET STARTED !</h2>         
                    <h2>Click the login button located at the top to log in,  </h2>  
                    <h2>or create a new account!</h2>
                    </div>
                  </div>    
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
