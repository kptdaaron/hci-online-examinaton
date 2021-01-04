const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


// @Create User Schema
const UserSchema = new Schema({
    id: { type: String, unique: true, sparse: true  },
    user_id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
    exams: []
})

const User = mongoose.model("users", UserSchema);

module.exports = User;