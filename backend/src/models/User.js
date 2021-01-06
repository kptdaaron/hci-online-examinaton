const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    user_id: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, minlength: 5 },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
    exams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exam" }],
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;
