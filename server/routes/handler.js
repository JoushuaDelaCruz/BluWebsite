require("../utils");
require("dotenv").config();

const express = require("express");
const router = express.Router();

/* SQL */
const database = include("databaseConnection");
const db_utils = include("database/db_utils");
const success = db_utils.printMySqlVersion();

router.get("/", (req, res) => {
  res.send("Hello World!");
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
