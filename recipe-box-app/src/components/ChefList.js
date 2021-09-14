import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class ChefList extends Component {
   
    render() {
        console.log(this.props)
        return (
            <ul>
                {this.props.chefs.map((chef) => 
                    <li key={chef.id}><Link to={`/chefs/${chef.id}`} onClick={this.props.chefLinkClicked}>{chef.name}</Link></li>
                )}

            </ul>
        )
        
    }
}
export default ChefList;