// index.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import routes
const formRoutes = require("./routes/formRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sync Database
const sequelize = require("./config/database");

sequelize
  .sync()
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => console.log(err));

// Use routes
app.use("/api/forms", formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
