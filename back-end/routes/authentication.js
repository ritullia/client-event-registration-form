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
    "INSERT INTO user (name, lastname, email, password) VALUES (?, ?, ?, ?)",
    [name, lastname, email, hashedPassword],
    (err, result) => defaultCallBack(err, result, res)
  );
});

router.post("/login", (req, res) => {
  const {
    body: { email, password },
  } = req;

  const incorrectCredentialsResponse = () =>
    res.json({
      message: "Incorrect email or password",
    });

  if (!email || !password) {
    incorrectCredentialsResponse();
    return;
  }

  clientsDbConnection.execute(
    "SELECT * FROM user WHERE email=?",
    [email],
    (err, result) => {
      if (result.length === 0) {
        incorrectCredentialsResponse();
      } else {
        const user = result[0];
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);

        const { id, email } = user;

        if (isPasswordCorrect) {
          const token = jwt.sign({ id, email }, process.env.JWT_SECRET);
          res.json({
            message: "Successfully logged in!",
            token,
          });
        } else {
          incorrectCredentialsResponse();
        }
      }
    }
  );
});

router.get("/token/verify", verifyToken, (req, res) => {
  res.json(res.locals.user);
});

module.exports = router;
