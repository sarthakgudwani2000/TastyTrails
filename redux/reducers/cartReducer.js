let defaultState = {
  selectedItems: { items: [], restaurantName: '' }
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };

      if (action.payload.checkboxValue) {
        const itemExists = newState.selectedItems.items.find(
          (item) => item.title === action.payload.title
        );

        if (!itemExists) {
          console.log("ADD TO CART", action.payload);
          newState.selectedItems = {
            items: [...newState.selectedItems.items, action.payload],
            restaurantName: action.payload.restaurantName
          };
        }
      } else {
        console.log("REMOVE FROM CART");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title !== action.payload.title
            )
          ],
          restaurantName: action.payload.restaurantName
        };
      }

      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;