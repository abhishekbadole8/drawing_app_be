const express = require("express");
const router = express.Router();
const { createShape, getAllShapes, deleteAllShapes } = require("../controllers/shapeController");

// Route for saving a rectangle
router.post("/shapes", createShape);
router.get("/shapes", getAllShapes);
router.delete("/shapes", deleteAllShapes);

module.exports = router;
