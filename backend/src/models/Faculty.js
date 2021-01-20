const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FacultySchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    faculty_id: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, minlength: 5 },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: {
      isAdmin: { type: Boolean, default: false },
      isFaculty: { type: Boolean, default: true },
      isStudent: { type: Boolean, default: false },
    },
    programs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Program",
      },
    ],
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    exams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam",
      },
    ],
    sections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
      },
    ],
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  { timestamps: true }
);

const Faculty = mongoose.model('faculty', FacultySchema);
module.exports = Faculty;