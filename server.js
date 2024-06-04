const express = require("express");
const app = express();
app.use(express.json());
app.get("/", async (req, res) => {
  return res.send("Express on Vercel");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

app.post("/add", (req, res) => {
  console.log(req.body);
  console.log(tasks);
  if (req.body.task == null) {
    res.status(400).json({
      data: "task name required",
    });
  } else if (req.body.task.trim() == "") {
    res.status(400).json({
      data: "enter proper task name",
    });
  }
  res.status(200).json({
    data: "User added successfully",
    tasks: req.body,
  });
});

module.exports = app;
