const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const route=require("./route/auth")
const verifyAdmin=require("./Middlewere/verifyadmin")


dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());
app.get("/admin/dashboard", verifyAdmin, (req, res) => {
  res.json({ message: "Welcome to admin dashboard" });
});
app.use("/api/auth",route)
console.log("Server file is running...");

mongoose.connect(process.env.MONGOOSE_URI)
.then(()=>{
    console.log("Mongodb Connected")
    app.listen(process.env.PORT,()=>console.log(`server is running at port ${process.env.PORT}`))
}).catch((err)=>console.error(err))