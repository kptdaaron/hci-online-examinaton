const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AdminSchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    admin_id: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, minlength: 5 },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: {
      isAdmin: { type: Boolean, default: true },
      isFaculty: { type: Boolean, default: false },
      isStudent: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model('admin', AdminSchema);

module.exports = Admin;