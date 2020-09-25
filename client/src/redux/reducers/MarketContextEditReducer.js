// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  marketcontext: {}
};

// Reducer
export default function MarketContextEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_MARKETCONTEXT_SUCCESS:
      return { ...state, marketcontext: action.payload };
    case types.UPDATE_MARKETCONTEXT_SUCCESS:
      return { ...state, marketcontext: action.payload };
    case types.GET_MARKETCONTEXT_SUCCESS:
      return { ...state, marketcontext: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}