const express = require("express");
const bodyParser = require("body-parser");
const router = require("./components/message/network");

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
