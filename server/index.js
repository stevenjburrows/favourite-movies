const express = require("express");
const routes= require("./routes/index");
const cors = require("cors");
const app = express();
app.use(express.json());
app.disable("x-powered-by");
app.use(cors());
app.use("/api", routes);

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log("server is running", process.env.NODE_ENV);
  console.log("server is running on port ", port);
});