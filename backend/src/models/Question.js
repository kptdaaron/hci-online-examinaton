const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemSchema = new Schema({
  choices: {
    correct: String,
    choice_b: String,
    choice_c: String,
    choice_d: String,
  },
});

const QuestionSchema = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  question_id: { type: mongoose.Schema.Types.ObjectId, unique: true },
  items: [ItemSchema],
});
