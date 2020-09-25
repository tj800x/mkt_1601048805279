import MarketContextModelGenerated from "./generated/MarketContextModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await MarketContextModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...MarketContextModelGenerated,
  ...customModel
};
