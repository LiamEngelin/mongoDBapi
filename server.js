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

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.get("/api/product/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.put("/api/product/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        res.status(200).json(product);

        if(!product){
            return res.status(404).json({message: "Product does not exist"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.delete("/api/product/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        res.status(200).json(product);

        if(!product){
            res.status(404).json({message: "Product does not exist"})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.
connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to mongoDatabase");
    app.listen(PORT,(req, res) => {
        console.log(`Live på http://localhost:${PORT}`)
    });
});