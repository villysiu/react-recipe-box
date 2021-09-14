export const fetchChefs = () => {
    return (dispatch) => {
      dispatch({ type: "LOADING_CHEFS" });
      fetch("http://localhost:3000/chefs")
        .then((response) => {
            
          return response.json();
        })
        .then((responseJSON) => {
            console.log(responseJSON)
          dispatch({ type: "SHOW_CHEFS", chefs: responseJSON });
        });
    };
  };