const express = require("express");
const { clientsDbConnection } = require("../db");
const { defaultCallBack } = require("../helpers/dbHelper");
const { verifyToken } = require("../helpers/authentication");

const router = express.Router();

router.get("/user", verifyToken, (req, res) => {
  clientsDbConnection.execute(`SELECT * FROM user`, (err, result) => {
    defaultCallBack(err, result, res);
  });
});

module.exports = router;
