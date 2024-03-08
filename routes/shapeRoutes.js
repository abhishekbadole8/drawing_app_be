const express = require("express");
const router = express.Router();
const { createShape, getAllShapes } = require("../controllers/shapeController");

// Route for saving a rectangle
router.post("/shapes", createShape);
router.get("/shapes", getAllShapes);

module.exports = router;
