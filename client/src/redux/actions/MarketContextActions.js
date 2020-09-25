import actionsFunction from "./generated/MarketContextActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import MarketContextApi from "../../api/MarketContextApi";
 
 actionsFunction.loadMarketContextList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return MarketContextApi
     .getMarketContextList()
     .then(list => {
       dispatch(actionsFunction.loadMarketContextSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
