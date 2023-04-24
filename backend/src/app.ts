import { json, urlencoded } from "body-parser";
import express, { NextFunction } from "express";
import connection from "./db/config";
import todoRoutes from "./routes/todos";

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/todos", todoRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection
  .sync()
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((err) => {
    console.log("Err ", err);
  });

app.listen(3000);
