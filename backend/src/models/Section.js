const mongoose = require('mongoose');
import { Schema } from mongoose;

const SectionSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true, unique: true },
    faculty: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    program: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
},
    { timestamps: true });

const Section = mongoose.model('sections', SectionSchema);
module.export = Section;