const express=require("express");
const app=express();
const port =5000;
const dotenv=require("dotenv");
const mongoose = require("mongoose");
dotenv.config({});
mongoose.connect(process.env.database).then(con=>{
    console.log("database connected sucessfully");
})
app.use("/",(req,res)=>{
    res.status(200).json("Hello")
})
app.listen(port,()=>{
    console.log("Hello from server")
})