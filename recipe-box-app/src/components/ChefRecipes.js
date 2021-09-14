import React, {Component} from 'react'
import RecipeList from './RecipeList';
import Chef from './Chef';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Recipe from '../components/Recipe'

class ChefRecipes extends Component {
    
    render() {
        
        console.log(this.props)
        let chef_id = parseInt(this.props.match.params.id)
        let chef = this.props.chefs.find((c)=> c.id === chef_id)
        let chef_recipes = this.props.recipes.filter((r) => r.chef_id === chef_id)
        console.log(chef_recipes)
        return (
            <Router>
            <div> 
                <Chef chef={ chef } />
            
              <RecipeList recipes={chef_recipes} recipeLinkClicked={this.props.recipeLinkClicked} />
              <Route path="/recipes/:id" render={routerProps => <Recipe {...routerProps} recipes={this.props.recipes} showRecipeCard={this.props.showRecipeCard} /> } />
            
            
            </div>
            </Router>
        )
    }
}
export default ChefRecipes;