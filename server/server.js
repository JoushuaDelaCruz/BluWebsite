const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const routesHandler = require("./routes/handler");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", routesHandler);

app.listen(port, () => {
  console.log("Server started on port 5000");
});
