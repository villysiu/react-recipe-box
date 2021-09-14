export const fetchRecipes = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_RECIPES" });
      fetch("http://localhost:3000/recipes")
        .then((response) => {
            
          return response.json();
        })
        .then((responseJSON) => {
            console.log(responseJSON)
          dispatch({ type: "SHOW_RECIPES", recipes: responseJSON });
        });
    };
  };