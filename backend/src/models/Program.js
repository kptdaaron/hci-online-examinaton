const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const courseSchema = require('../models/Course').schema;

const ProgramSchema = new Schema({
    id: { type: String, unique: true },
    program_id: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
});

const Program = mongoose.model("programs", ProgramSchema);

module.exports = Program; 