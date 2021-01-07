const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExamSchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    exam_id: { type: String, unique: true, required: true },
    taggedCourse: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    question: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Question", required: true },
    ],
  },
  { timestamps: true }
);

const Exam = mongoose.model("exams", ExamSchema);
module.exports = Exam;
