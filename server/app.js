const express = require("express");
const dotenv=require("dotenv").config();
const app = express();
const errorMiddleware = require("./Middlewares/error");
const cookieParser=require("cookie-parser");
const morgan=require("morgan");

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Route Imports
const user = require("./Routes/userRoute");

app.use("/api/v1", user);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;