// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_mkt_db";
import UserModel from "../models/Mkt_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.mkt_db.host +
        ":" +
        properties.mkt_db.port +
        "//" +
        properties.mkt_db.user +
        "@" +
        properties.mkt_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.mkt_db.name,
      properties.mkt_db.user,
      properties.mkt_db.password,
      {
        host: properties.mkt_db.host,
        dialect: properties.mkt_db.dialect,
        port: properties.mkt_db.port,
        logging: false
      }
    );
    this.dbConnection_mkt_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_mkt_db;
  }
}

export default new Database();
