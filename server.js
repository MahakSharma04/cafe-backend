import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();

const dbuser = encodeURIComponent(process.env.DBUSER)//this is used so that any special character in dbuser and dbpass can be encoded and used in the url of mongodb connection string
const dbpass = encodeURIComponent(process.env.DBPASS)//otherwise it will break the url as slash special character, etc maybe used then 

mongoose.connect(`mongodb://localhost:27017/merncafe`).then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});


// mongoose.connect(`mongodb+srv://${dbuser}:${dbpass}@cluster0.fhfiwmd.mongodb.net/merncafe?retryWrites=true&w=majority&appName=Cluster0
//   `).then(() => {
//     app.listen(8080, () => {
//       console.log("Server started");
//     });
//   });

app.use("/api/users", userRouter);//middleware 











//atlas login-> create cluster-> drivers->copy the url and username and password
//url copied from atlas give to mongosh "url" in terminal to connect to the database
//network access-> add ip address->0.0.0.0/0

//mahaksharma1125=atlas username
//bcivEkv7dINtko7R=atlas password

//mongodb+srv://mahaksharma1125:bcivEkv7dINtko7R@cluster0.fhfiwmd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


// Introduction to Nodejs
// Introduction to Express Framework
// req object - params, query, headers
// Middleware - express.json, express.static
// Security modules - bcrypt, jsonwebtoken
// dotenv module
// CRUD operation using mongoose
// Express Router

// Introduction to MongoDB
// CRUD Operation
// Indexes
// Aggregation
// Views
// Backup and Restore
// Replication
// Sharding
// User Management

// Introduction to JavaScript
// Operators
// Conditional Statement
// Looping Statement
// Regular Function
// Arrow Function
// Callback Function
// Objects in JavaScript
// Arrays and Methods
// Shopping Cart Logic
// Module - Import and Export
// let vs var keyword
// Spread operator
// Error handling
// Working with JSON
// Promises
// Closure
