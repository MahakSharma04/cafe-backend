//npm init -y first intitialize node
//npm i express bcrypt jsonwebtoken dotenv mongoose nodemon
//.env
//.gitignore mention the things which we don’t need in git
//middleware- auth.js
//routes-routes from controllers, controllers-functions defining routes, models-schema
//server.js

import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: {type: String},
    email: { type: String, unique: true },
    password: { type: String },
    role: { type: String, default: "user" },
    status:{ type: String, default: "active"},
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
