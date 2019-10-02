let express = require("express");
let app = express();
const exphbs = require("express-handlebars");
const body = require("body-parser");
const greet = require("./greetings-route.js");

const hello = greet();

const handlebarSetup = exphbs({
  partialsDir: "./views/partials",
  viewPath: "./views",
  layoutsDir: "./views/layouts"
});

app.engine("handlebars", handlebarSetup);
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(body.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.render("index", {
    name: hello.getString()
  });
 // console.log(hello.getName());
});

app.post("/name", function(req, res) {
  hello.greet(req.body.names, req.body.language);
  //console.log(hello.greet(req.body.names, req.body.language));

  res.redirect("/");
});

// app.use(body.json());

app.get("/greeted", function(req, res) {
  res.render("greeted", { list: hello.nameGet() });
  //console.log( hello.nameGet())
});

// app.get("/actions", function(req, res) {
// })

// app.get("/actions/:actionPlan", function(req, res) {
// });

let PORT = process.env.PORT || 5005;

app.listen(PORT, function() {
  console.log("App starting on port", PORT);
});
