const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoleSchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true, unique: true },
    members: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Role = mongoose.model("role", RoleSchema);

module.exports = Role;
