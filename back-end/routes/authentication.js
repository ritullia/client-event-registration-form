const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { clientsDbConnection } = require("../db");
const { defaultCallBack } = require("../helpers/dbHelper");
const { verifyToken } = require("../helpers/authentication");

const router = express.Router();

router.post("/register", (req, res) => {
  const {
    body: { name, lastname, email, password },
  } = req;

  const hashedPassword = bcrypt.hashSync(password, 12);

  clientsDbConnection.execute(
    "INSERT INTO users (name, lastname, email, password) VALUES (?, ?, ?, ?)",
    [name, email, hashedPassword],
    (err, result) => defaultCallBack(err, result, res)
  );
});
