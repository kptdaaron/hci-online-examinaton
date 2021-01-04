const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    id: { type: String, unique: true },
    course_id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Program' }]

})

const Course = mongoose.model("courses", CourseSchema);

module.exports = Course;