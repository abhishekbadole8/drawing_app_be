const Shape = require("../models/shapeModel");

// post data
const createShape = async (req, res) => {
  try {
    const shapeData = req.body;

    const existingShape = await Shape.findOne({ type: shapeData.type });

    if (existingShape) {
      // If shape already exists, update its data
      const updatedShape = await Shape.findOneAndUpdate(
        { type: shapeData.type },
        { data: shapeData.data },
        { new: true }
      );

      return res.status(200).json(updatedShape);
    }
    // If shape does not exist, create it
    const createdShape = await Shape.create(shapeData);

    return res.status(201).json(createdShape);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get data
const getAllShapes = async (req, res) => {
  try {
    const shapes = await Shape.find();
    res.status(200).json(shapes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//    delete all
const deleteAllShapes = async (req, res) => {
  try {
    // delete all shapes
    await Shape.deleteMany();

    res.status(200).json({ message: "All shapes deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createShape, getAllShapes,deleteAllShapes };
