const express = require("express");
const routes= require("./routes/index");
const cors = require("cors");
const app = express();
app.use(express.json());
app.disable("x-powered-by");

app.use("/api", routes);
app.use(cors());

app.listen("3000", () => {
  console.log("server is running", process.env.NODE_ENV);
});