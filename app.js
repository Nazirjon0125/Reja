console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
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
app.post("/create-item", (req, res) => {
  console.log(req.body);
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
    // if (err) {
    //   console.log(err);
    //   res.end("Something went wrong");
    // } else {
    //   res.end("Successfully added");
    // }
  });
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});
app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        // console.log(data);
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
