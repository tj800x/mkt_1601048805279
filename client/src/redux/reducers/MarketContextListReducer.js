// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function MarketContextListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_MARKETCONTEXT_SUCCESS:
      return { ...state, marketcontext: action.payload };
    case types.LIST_MARKETCONTEXT_SUCCESS:
      return { ...state, listMarketContext: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}