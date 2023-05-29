const express = require("express");
const { clientsDbConnection } = require("../db");
const { defaultCallBack } = require("../helpers/dbHelper");
const { verifyToken } = require("../helpers/authentication");

const router = express.Router();

router.get("/clients", verifyToken, (req, res) => {
  clientsDbConnection.execute(`SELECT * FROM client`, (err, result) => {
    defaultCallBack(err, result, res);
  });
});

router.get("/clients/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  clientsDbConnection.execute(
    `SELECT  client.id, client.name AS client_name,
    user.id AS user_id, user.email
       FROM 
       client
       INNER JOIN 
      user ON client.user_id=user.id WHERE user_id=?`,
    [id],
    (err, result) => {
      defaultCallBack(err, result, res);
    }
  );
});

router.post("/clients", verifyToken, (req, res) => {
  const user_id = res.locals.user.id;
  const {
    body: { name, lastname, phone_number, email },
  } = req;

  clientsDbConnection.execute(
    `INSERT INTO client (name, lastname, phone_number, email, user_id) VALUES (?, ?, ?, ?, ?)`,
    [name, lastname, phone_number, email, user_id],
    (err, result) => {
      defaultCallBack(err, result, res);
    }
  );
});

router.put("/clients/:id", verifyToken, (req, res) => {
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

router.delete("/clients/:id", verifyToken, (req, res) => {
  const { id } = req.params;

  clientsDbConnection.execute(
    `DELETE FROM client WHERE id=?`,
    [id],
    (err, result) => defaultCallBack(err, result, res)
  );
});

module.exports = router;
