import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "anku@1234",
  database: "todos",
  logging: false,
  models: [Todos],
});

export default connection;
