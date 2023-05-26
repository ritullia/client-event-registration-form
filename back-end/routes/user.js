const express = require("express");
const { clientsDbConnection } = require("../db");
const { defaultCallBack } = require("../helpers/dbHelper");
const { verifyToken } = require("../helpers/authentication");

const router = express.Router();

router.get("/user", (req, res) => {
  clientsDbConnection.execute(`SELECT * FROM user`, (err, result) => {
    defaultCallBack(err, result, res);
  });
});
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  clientsDbConnection.execute(
    `SELECT user.id, user.name, client.id, client.name FROM client
    LEFT JOIN user
    ON client.user_ID = user.id WHERE user.id IS NULL`,
    [id],
    (err, result) => {
      defaultCallBack(err, result, res);
    }
  );
});

module.exports = router;
