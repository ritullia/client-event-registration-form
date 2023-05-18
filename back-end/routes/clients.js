const express = require("express");
const { clientsDbConnection } = require("../db");
const { defaultCallBack } = require("../helpers/dbHelper");

const router = express.Router();

router.get("/clients", (req, res) => {
  clientsDbConnection.execute(`SELECT * FROM clients`, (err, result) => {
    defaultCallBack(err, result, res);
  });
});

router.post("/clients", (req, res) => {
  const {
    body: { name, lastname, phone_number, email },
  } = req;

  clientsDbConnection.execute(`INSERT INTO clients `);
});

module.exports = router;
