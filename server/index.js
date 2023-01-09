const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const PORT = process.env.PORT || 3100;

// init express
const app = express();

// enable cors
app.use(cors);

app.get("/api/search/:query", (req, res) => {
    try {
        res.status(200).json({ message: true })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
});

app.listen(PORT, () => {
    console.log("App started at port: " + PORT);
});