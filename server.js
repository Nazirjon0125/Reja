const http = require("http");
const mongodb = require(mongodb);

let db;
const connectionString = "mongodb+srv://nazirjon_n:01251996n@cluster0.71u6m.mongodb.net/reja";

mongodb.connect(
  connectionString,
  {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
        console.log(client);
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
