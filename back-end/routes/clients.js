const express = require("express");
const { clientsDbConnection } = require("../db");
const { defaultCallBack } = require("../helpers/dbHelper");
const { verifyToken } = require("../helpers/authentication");

const router = express.Router();

router.get("/clients", (req, res) => {
  clientsDbConnection.execute(`SELECT * FROM client`, (err, result) => {
    defaultCallBack(err, result, res);
  });
});

router.post("/clients", (req, res) => {
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

router.delete("/clients/:id", (req, res) => {
  const { id } = req.params;

  clientsDbConnection.execute(
    `DELETE FROM client WHERE id=?`,
    [id],
    (err, result) => defaultCallBack(err, result, res)
  );
});

module.exports = router;
