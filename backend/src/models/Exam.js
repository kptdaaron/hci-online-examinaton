const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExamSchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    exam_id: { type: mongoose.Schema.Types.ObjectId },
    author: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' }],
    program: [{ type: mongoose.Schema.Types.ObjectId, ref: "Program" }],
    course: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    section: [{ type: mongoose.Schema.Types.ObjectId, ref: "Section" }],
    examDate: {
      start: { type: String },
      end: { type: String },
    },

    duration: { type: Number },
    marks: { type: Number },
    title: { type: String },
    questions: [
      {
        id: { type: mongoose.Schema.Types.ObjectId, unique: true },
        body: { type: String },
        choices: {
          a: {
            text: { type: String },
            isCorrect: { type: Boolean, default: true },
          },
          b: {
            text: { type: String },
            isCorrect: { type: Boolean, default: false },
          },
          c: {
            text: { type: String },
            isCorrect: { type: Boolean, default: false },
          },
          d: {
            text: { type: String },
            isCorrect: { type: Boolean, default: false },
          },
        },
      },
    ],
  },
  { timestamps: true }
);

const Exam = mongoose.model("exams", ExamSchema);
module.exports = Exam;
