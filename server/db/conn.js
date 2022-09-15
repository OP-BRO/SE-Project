import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//const db = process.env.db;
const PORT = process.env.PORT || 4000;
const db =
  "mongodb+srv://web_monsters:seproject@cluster0.qetplwl.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(db)
  .then(() => console.log(`Server running on port: http://localhost:${PORT}`))
  .catch((error) => console.log(`${error} did not connect`));
