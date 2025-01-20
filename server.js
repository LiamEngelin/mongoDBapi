require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 8080;
const mongoose = require("mongoose");
const Product = require("./models/productmodel");
app.use(express.json());

app.get("/",(req,res) => {
    res.send("Welcome to my mongoAPI")
});

app.post("/blogpost", (req,res) => {
    res.send("This is a postrequest")
});

app.post("/api/product", async (req, res) =>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(404);
    }
});

mongoose.
connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to mongoDatabase");
    app.listen(PORT,(req, res) => {
        console.log(`Live på http://localhost:${PORT}`)
    });
});