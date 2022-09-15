import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

dotenv.config({ path: "./config.env" });
import "./db/conn.js";

import router from "./router/auth.js";

//const PORT = process.env.PORT;
//  const db = process.env.db;

app.use(router);

const middleware = (req, res, next) => {
  console.log(`hemlo my middleware`);
  next();
};

app.listen(4000);
/*
app.get('/',(req,res) => {
    res.send(`so knowledge`);

});

app.post('/register', async (req, res) => {
    console.log(req.body);
    res.json({message: req.body})

    const newPostMessage = new dum(req.body)

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    res.send("data send");
});
 
*/

// {
//     "name": "server",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "type": "module",
//     "scripts": {
//       "start": "nodemon index.js"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "dependencies": {
//       "bcryptjs": "^2.4.3",
//       "body-parser": "^1.20.0",
//       "cors": "^2.8.5",
//       "dotenv": "^16.0.1",
//       "express": "^4.18.1",
//       "jsonwebtoken": "^8.5.1",
//       "mongoose": "^6.5.2",
//       "nodemon": "^2.0.19"
//     }
//   }
