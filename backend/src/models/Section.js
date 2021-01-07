const mongoose = require('mongoose');
import { Schema } from mongoose;

const SectionSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    program: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    name: { type: String, required: true, unique: true },
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'Role'}], 
    timestamp: { type: Date}
})

const Section = mongoose.model('sections', SectionSchema);
module.export = Section;