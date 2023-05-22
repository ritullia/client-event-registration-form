const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { clientsDbConnection } = require("../db");
const { defaultCallback } = require("../helpers/dbHelper");

const router = express.Router();

router.post();
