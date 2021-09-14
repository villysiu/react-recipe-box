//import uuid from 'uuid'

const recipesReducer = (
    state = {
        recipes: [],
        chefs: [],
        loading: false,
        recipeLinkClicked: false
    }, action) => {
        console.log(action)
    switch (action.type) {
        case "LOADING_RECIPES":
            return {
                ...state,
                recipes: [...state.recipes],
                loading: true
            }
        case "SHOW_RECIPES":
            return {
                ...state,
                recipes: action.recipes,
                loading: false
           }
        case "LOADING_CHEFS":
            return {
                ...state,
                chefs: [...state.chefs],
                loading: true
            }
        case "SHOW_CHEFS":
            
            return {
                ...state,
                chefs: action.chefs,
                loading: false
            }
            
                case "CHEF_CLICKED":
                    return {
                        ...state,
                        recipeLinkClicked: false
                    }
                case "RECIPE_CLICKED":
                    console.log("change")
                    return {
                        ...state,
                        recipeLinkClicked: true
                   }
        default:
            return state;
    }

}

export default recipesReducer