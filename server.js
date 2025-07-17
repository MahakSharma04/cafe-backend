import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoute.js"
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const dbuser = encodeURIComponent(process.env.DBUSER);
const dbpass = encodeURIComponent(process.env.DBPASS);

mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});

// mongoose
//   .connect(
//     `mongodb+srv://${dbuser}:${dbpass}@cluster0.qjxhv.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0`
//   )
//   .then(() => {
//     app.listen(8080, () => {
//       console.log("Server started");
//     });
//   });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter)


// npm init -y for package.json
// package.json mn type: module then only export and import will work
// npm i express mongoose dotenv cors
// npm i bcrypt jsonwebtoken
// npm i nodemon --save-dev
// index.js server.js initialize krna h import express and 8080 port dena h
// folders controllers, models, routes, middlewares
// model dena h - schema (data)
// then controllers - crud operations (export them)
// then routes (import controllers and define routes - express.Router())
// routes - users(admin(middlewares), user)
// then server.js - routing with prefixes , taken from routes folder
// then check in postman