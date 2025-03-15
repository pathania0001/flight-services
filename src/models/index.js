import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Sequelize from "sequelize";
import process from "process";
import configJson from "../config/config.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.env.NODE_ENV || "development";
const config = configJson[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const modelFiles = fs
  .readdirSync(__dirname)
  .filter((file) => file.indexOf(".") !== 0 && file !== path.basename(__filename) && file.slice(-3) === ".js");

for (const file of modelFiles) {
  const modelModule = await import(`file://${path.join(__dirname, file)}`);
  const model = modelModule.default(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
export const { Airplane } = db;