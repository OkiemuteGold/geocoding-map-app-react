const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3100;

// init express
const app = express();

// enable cors
app.use(cors());

// routes
app.use("/api/search", require("./routers/searchResults"));

app.listen(PORT, () => {
    console.log("App started at port: " + PORT);
});