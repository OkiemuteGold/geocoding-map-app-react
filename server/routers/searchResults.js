const express = require("express");
const router = express.Router();
const axios = require("axios");
const url = require("url");

router.get("/:query", async (req, res) => {
    try {
        // add api key and query strings
        const params = new URLSearchParams({
            access_token: process.env.API_KEY,
            ...url.parse(req.url, true).query
        });

        const query = req.params.query;
        const searchUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?${params}`;

        const results = await axios(searchUrl);
        const data = results.data;

        res.status(200).json({ status: true, data: data });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;