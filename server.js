const express = require("express")
const app = express();
const PORT = 8080;

app.listen(PORT,(req, res) => {
    console.log(`Live på http://localhost:${PORT}`)
})