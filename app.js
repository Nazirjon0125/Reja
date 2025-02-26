console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// MongoDB chaqirish
const db = require("./server").db();

// 1 kirish code
app.use(express.static("public")); //har qanday brauserdan kirilganda public folderi ochiq degani
app.use(express.json()); //  json formatdagi datani object formatga o'girib beradi
app.use(express.urlencoded({ extended: true })); // HTML dan form requiest qilib beradi

// 2 Session

// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs"); // EJS da backend orqali frontedni yasaymiz

// 4 Routing code
// POST malumotni olib kelib datebase ga yozadi
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

// get datebas dan malumotni uqish uchun
app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;
