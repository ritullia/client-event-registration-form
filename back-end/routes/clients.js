const express = require("express");
const { clientsDbConnection } = require("../db");
const { defaultCallBack } = require("../helpers/dbHelper");

const router = express.Router();

router.get("/client", (req, res) => {
  clientsDbConnection.execute(`SELECT * FROM client`, (err, result) => {
    defaultCallBack(err, result, res);
  });
});

router.post("/client", (req, res) => {
  const {
    body: { name, lastname, phone_number, email },
  } = req;

  clientsDbConnection.execute(
    `INSERT INTO client (name, lastname, phone_number, email) VALUES (?, ?, ?, ?) `,
    [name, lastname, phone_number, email],
    (err, result) => {
      defaultCallBack(err, result, res);
    }
  );
});

module.exports = router;
