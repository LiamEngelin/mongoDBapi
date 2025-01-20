const express = require("express")
const app = express();
const PORT = 8080;
const mongoose = require("mongoose")


app.get("/",(req,res) => {
    res.send("Welcome to my mongoAPI")
});

app.post("/blogpost", (req,res) => {
    res.send("This is a postrequest")
});

mongoose.
connect("mongodb+srv://liamiths2024:liamiths2024@mycluster.5gnyu.mongodb.net/Products-API?retryWrites=true&w=majority&appName=MyCluster")
.then(() => {
    console.log("Connected to mongoDatabase");
    app.listen(PORT,(req, res) => {
        console.log(`Live på http://localhost:${PORT}`)
    });
});