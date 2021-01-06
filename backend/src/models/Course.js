const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    course_id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Program" }],
  },
  { timestamps: true }
);

const Course = mongoose.model("courses", CourseSchema);

module.exports = Course;
