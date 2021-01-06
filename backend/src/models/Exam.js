const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExamSchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    exam_id: { type: String, unique: true, required: true },
  },
  { timestamps: true }
);

const Exam = mongoose.model("exams", ExamSchema);
module.exports = Exam;
