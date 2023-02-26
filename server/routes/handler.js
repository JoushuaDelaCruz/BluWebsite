require("../utils");
require("dotenv").config();

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 12;
const session = require("express-session");

/* SQL */
const database = include("databaseConnection");
const db_utils = include("database/db_utils");
const db_users = include("database/User");
const success = db_utils.printMySqlVersion();

/* SESSIONS -> MongoDB */
const MongoStore = require("connect-mongo");
const mongodb_secret_session = process.env.MONGODB_SECRET_SESSION;
const node_secret_session = process.env.NODE_SECRET_SESSION;
const expireTime = 1 * 60 * 60 * 1000; // 1 hour
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_username = process.env.MONGODB_USERNAME;

var mongoSessionStore = MongoStore.create({
  mongoUrl: `mongodb+srv://${mongodb_username}:${mongodb_password}@blu.1ib6bi2.mongodb.net/sessions`,
  crypto: {
    secret: mongodb_secret_session,
  },
});

router.use(
  session({
    secret: node_secret_session,
    resave: true,
    saveUninitialized: false,
    store: mongoSessionStore,
  })
);

router.post("/userSignUp", async (req, res) => {
  let hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
  req.body.password = hashedPassword;

  let success = await db_users.createUser(req.body);
  if (success) {
    console.log({ message: "User created successfully" });
  } else {
    console.log({ message: "User creation failed" });
  }
});

router.post("/userLogIn", async (req, res) => {
  let user = await db_users.getUser(req.body.email);
  if (user === undefined) {
    res.send({ message: "User not found" });
    return;
  }
  if (bcrypt.compareSync(req.body.password, user.password)) {
    req.session.authenticated = true;
    req.session.reader = user.reader_id;
    req.session.username = user.username;
    req.session.is_admin = user.is_admin;
    req.session.cookie.maxAge = expireTime;
    res.send(true);
  } else {
    res.send(false);
  }
});

router.get("/authenticated", (req, res) => {
  res.send(req.session.authenticated);
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
