
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import RecipesContainer from './containers/RecipesContainer' 
import ChefsContainer from './containers/ChefsContainer';
import NavBar from './components/NavBar';
import RecipeInput from './components/RecipeInput';

class App extends Component {

  render() {
    
    return (
      <Router>
      <div className="App">
        <h2>Welcome to Recipe Box</h2>
        <NavBar />
        <Route exact path="/" render={() => <RecipesContainer />} />
        <Route exact path="/chefs" render={() => <ChefsContainer  />} />
        <Route exact path="/new" render={() => <RecipeInput />} />
       
      </div>
      </Router>
    )
  }
}
export default App;

