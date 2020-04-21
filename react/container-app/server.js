const express = require("express");
const app = express();
const hbs = require("express-hbs");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.engine(
  "html",
  hbs.express4({
    extname: "html",
  })
);

app.get("/", (req, res) =>
  res.render("index", {
    APP_A_LOCATION: process.env.APP_A_LOCATION,
    APP_B_LOCATION: process.env.APP_B_LOCATION,
  })
);
app.use(express.static("build"));
app.set("views", "build");
app.set("view engine", "html");

app.get("*", (req, res) =>
  res.render("index", {
    APP_A_LOCATION: process.env.APP_A_LOCATION,
    APP_B_LOCATION: process.env.APP_B_LOCATION,
  })
);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
