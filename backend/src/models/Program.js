const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgramSchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    program_id: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    faculty: [{ type: mongoose.Schema.Types.ObjectId, ref: "Faculty"}]
  },
  { timestamps: true }
);

const Program = mongoose.model("programs", ProgramSchema);

module.exports = Program;
