const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    user_id: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true, minlength: 5 },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    exams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exam" }],
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    programs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Program" }],
    sections: [{ type: mongoose.Schema.Types.ObjectId, ref: "Section" }],
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;
