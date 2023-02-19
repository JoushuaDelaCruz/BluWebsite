/**
 * Cheat Sheet:
 * 
 * To run the backend server, you need to run the following command:
 * npm run dev
 */
require('./utils');
require('dotenv').config();

/* SQL */
const database = include('databaseConnection');
const db_utils = include('database/db_utils');
const success = db_utils.printMySqlVersion();

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/createUserTable', async (req, res) => {
  const create_user_table = include('database/create_user_table');
  
  var success = create_user_table.createUserTable();
  if (success) {
    console.log({ message: 'User table created successfully' });
  } else {
    console.log({ message: 'User table creation failed' });
  }
});

app.get('/message', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
    console.log('Server started on port 5000');
})