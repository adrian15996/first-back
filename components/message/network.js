const response = require("../network/response");
const express = require("express");
const router = express.Router();

router.get("/message", (req, res) => {
  console.log(req.headers);
  res.header({
    "cutom-header": "Nuestro valor personalizado",
  });
  response.success(req, res, "lista de mensajes");
});

router.post("/message", (req, res) => {
  console.log(req.query);
  if (req.query.error == "ok") {
    response.error(req, res, "Error inesperado", 500, "Es solo una simulacion");
  } else {
    response.success(req, res, "Creado correctamente", 201);
  }
});

module.exports = router;
