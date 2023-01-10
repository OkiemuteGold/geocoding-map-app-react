const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const PORT = process.env.PORT || 3100;

// init express
const app = express();

// enable cors
app.use(cors());

// routes
app.get("/api/search/:query", async (req, res) => {
    try {
        const query = req.params.query;
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${process.env.API_KEY}`
        const result = await axios(url);

        // console.log(query, result);
        res.status(200).json({ message: true, data: result.data });
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
});

app.listen(PORT, () => {
    console.log("App started at port: " + PORT);
});