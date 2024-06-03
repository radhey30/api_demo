const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

app.post("/add", (req,res) => {
    res.status(200).json({
        "data": "User added successfully"
    });
})

module.exports = app;