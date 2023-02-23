require("../utils");
require("dotenv").config();

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 12;

/* SQL */
const database = include("databaseConnection");
const db_utils = include("database/db_utils");
const db_users = include("database/User");
const success = db_utils.printMySqlVersion();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/userSignUp", async (req, res) => {
  var hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
  req.body.password = hashedPassword;

  var success = await db_users.createUser(req.body);
  if (success) {
    console.log({ message: "User created successfully" });
  } else {
    console.log({ message: "User creation failed" });
  }
});

// app.get("/createUserTable", async (req, res) => {
//     const create_user_table = include("database/create_user_table");

//     var success = create_user_table.createUserTable();
//     if (success) {
//       console.log({ message: "User table created successfully" });
//     } else {
//       console.log({ message: "User table creation failed" });
//     }
//   });

module.exports = router;
