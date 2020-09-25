import MarketContextApiGenerated from "./generated/MarketContextApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class MarketContextApi extends MarketContextApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get MarketContext List
  static getMarketContextList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/marketcontexts")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default MarketContextApi;