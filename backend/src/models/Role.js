const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  name: { type: String },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Role = mongoose.model("role", RoleSchema);

module.exports = Role;
