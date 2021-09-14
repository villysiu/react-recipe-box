import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ChefList from '../components/ChefList'
import ChefRecipes from '../components/ChefRecipes'
import { connect } from 'react-redux'
import { fetchChefs } from '../actions/chefActions'

 class ChefsContainer extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.fetchChefs();
    }

    render () {
        console.log(this.props)
        return (
            <Router>
                <ChefList chefs={this.props.chefs} chefLinkClicked={this.props.chefLink}/>
                <Route path="/chefs/:id" render={routerProps => <ChefRecipes {...routerProps} chefs={this.props.chefs} recipes={this.props.recipes}  recipeLinkClicked={this.props.recipeLink} showRecipeCard={this.props.showRecipeCard} /> } />
            </Router>
        )             
    }
 }
 const mapStateToProps = (state) => {
    return {
      chefs: state.chefs,
      loading: state.loading,
      recipes: state.recipes,
      showRecipeCard: state.recipeLinkClicked
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchChefs: () => dispatch(fetchChefs()),
      chefLink: () => dispatch({type: 'CHEF_CLICKED' }),
      recipeLink: () => dispatch({type: 'RECIPE_CLICKED' }),
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ChefsContainer);
