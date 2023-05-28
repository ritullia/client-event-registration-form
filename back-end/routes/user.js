const express = require("express");
const { clientsDbConnection } = require("../db");
const { defaultCallBack } = require("../helpers/dbHelper");
const { verifyToken } = require("../helpers/authentication");

const router = express.Router();

router.get("/user", (req, res) => {
  clientsDbConnection.execute(
    `SELECT * FROM user`,

    (err, result) => {
      defaultCallBack(err, result, res);
    }
  );
});
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  clientsDbConnection.execute(
    `SELECT * FROM user WHERE id=?`,
    [id],
    (err, result) => {
      defaultCallBack(err, result, res);
    }
  );
});
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  clientsDbConnection.execute(
    `SELECT user.name AS user_name, 
    client.email, client.name AS client_email, client.name
    FROM 
    user
    LEFT JOIN 
    client ON user.client_id = client.id
    WHERE user.id=?`,
    [id],
    (err, result) => {
      defaultCallBack(err, result, res);
    }
  );
});

module.exports = router;
