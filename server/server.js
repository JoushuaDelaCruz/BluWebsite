require("./utils");
require("dotenv").config();

/* SQL */
const database = include("databaseConnection");
const db_utils = include("database/db_utils");
const success = db_utils.printMySqlVersion();

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Server started on port 5000");
});
