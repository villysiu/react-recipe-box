import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class RecipeList extends Component {
    render() {

        console.log(this.props)
        return (
            <ul>
                {this.props.recipes.map((recipe) => 
                    <li key={recipe.id}><Link to={`/recipes/${recipe.id}`} onClick={this.props.recipeLinkClicked }>{recipe.name}</Link></li>
                )}

            </ul>
        )
        
    }
}
export default RecipeList;