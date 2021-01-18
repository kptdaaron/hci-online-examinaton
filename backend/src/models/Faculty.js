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