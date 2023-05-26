const express = require("express");
const { clientsDbConnection } = require("../db");
const { defaultCallBack } = require("../helpers/dbHelper");
const { verifyToken } = require("../helpers/authentication");

const router = express.Router();

router.get("/clients", (req, res) => {
  clientsDbConnection.execute(
    `SELECT 
  client.id, client.name, client.lastname, client.email AS client_name, client_lastname, client_email, 
  user.id, user.name AS user_name, user.email
FROM
 client
 LEFT JOIN 
 user ON client.user_ID = user.id`,
    (err, result) => {
      defaultCallBack(err, result, res);
    }
  );
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

router.put("/clients/:id", (req, res) => {
  const {
    body: { name, lastname, phone_number, email },
  } = req;
  const { id } = req.params;

  clientsDbConnection.execute(
    `UPDATE client SET name=?, lastname=?, phone_number=?, email=? WHERE id=?`,
    [name, lastname, phone_number, email, id],

    (err, result) => defaultCallBack(err, result, res)
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
