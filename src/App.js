import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './App.css';
import Header from './components/organisms/Header/default';

import Home from './components/templates/Home';
import ViewMovie from './components/templates/ViewMovie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route
            render={({ location }) => (
              <div>
                <Header />
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={1000}
                  >
                    <div>
                      <Switch location={location}>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Movie' component={ViewMovie} />
                      </Switch>
                    </div>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            )}
          />
        </BrowserRouter>
        
      </div>
    );
  } 
}

export default App;
