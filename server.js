const express = require("express");
const sql = require("@vercel/postgres");
const app = express();
let tasks = [];
app.use(express.json());
app.get("/", async (req, res) => {
  try {
    const result =
      await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
      console.log("result = " + result);
    return res.send("Express on Vercel");
  } catch (error) {
    return res.send("Express on Vercel ok" + error);
  }
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
  tasks.push(req.body.task);
});

module.exports = app;
