import React, {Component} from 'react'
import RecipeCard from './RecipeCard';

class Recipe extends Component {
    
    render() {
        console.log(this.props)
        if ( this.props.showRecipeCard ) {
        let recipe_id = parseInt(this.props.match.params.id);
        let recipe = this.props.recipes.find((r) => r.id === recipe_id)

        console.log(this.props)
        return (
                <>{ recipe? <RecipeCard recipe={recipe}/> : "no match" }</>  
        )
    }

    else {
        return (
            <div>nothing</div>
        )
    }
}}
export default Recipe;