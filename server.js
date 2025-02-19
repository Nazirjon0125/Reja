console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

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

// get datebas dan malumotni uqish uchun
app.get("/", function (req, res) {
  resizeBy.render("harid");
});

// app.get("/hello", function (req, res) {
//   res.end(`<h1>HELLO WORLD by John</h1>`);
// });

// app.get("/gift", function (req, res) {
//   res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
// });

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
