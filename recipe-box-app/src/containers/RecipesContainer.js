import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import RecipeList from '../components/RecipeList'
import Recipe from '../components/Recipe'

import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipeActions'


class RecipesContainer extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.fetchRecipes();
      }
    render() {
        console.log(this.props)

        return (

            <Router>
            <div>
                <RecipeList recipes={this.props.recipes} />
                <Route path="/recipes/:id" render={routerProps => <Recipe {...routerProps} recipes={this.props.recipes} showRecipeCard="true" /> } />
            </div>
            </Router>
        
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
      recipes: state.recipes,
      loading: state.loading,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchRecipes: () => dispatch(fetchRecipes()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);