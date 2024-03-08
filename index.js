const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5001;

const connectDb = require("./config/dbConnection");
const shapeRoutes = require("./routes/shapeRoutes");

connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", shapeRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
