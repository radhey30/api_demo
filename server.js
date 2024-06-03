const axios = require('axios');
const vercelToken = "9RMk9jbWL8KGAXLldmxPxdI1";
const apiEndPt = "https://api.vercel.com/v9/projects";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;