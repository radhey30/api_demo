const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

app.post("/add", (req,res) => {
    console.log(req.body);
    res.status(200).json({
        "data": "User added successfully",
        "tasks": req.body
    });
})

module.exports = app;