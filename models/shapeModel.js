const { default: mongoose } = require("mongoose");

const shapeSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  data: [
    {
      id: { type: String, required: true },
      x: { type: Number },
      y: { type: Number },
      width: { type: Number },
      height: { type: Number },
      strokeColor: { type: String, required: true },
      strokeWidth: { type: Number, required: true },
      radius: { type: Number },
      points: [{ type: Number }],
    },
  ],
});

const Shape = mongoose.model("Shape", shapeSchema);

module.exports = Shape;
