const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExamSchema = new Schema({
    id: { type: String, unique: true  },
    exam_id: { type: String, unique: true, required: true }
})

const Exam = mongoose.model('exams', ExamSchema);
module.exports = Exam;