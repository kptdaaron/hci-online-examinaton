const Exam = require("../models/Exam");

module.exports = {
  //# create a exam
  create: async (req, res) => {
    try {
      const exam = req.body;
      const newExam = await Exam.create(exam);
      res.status(201).send(newExam);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get the list of exams
  fetch: async (req, res) => {
    try {
      const exams = await Exam.find({});
      const count = await Exam.countDocuments({});
      res.setHeader("Access-Control-Expose-Headers", "Content-Range");
      res.setHeader("Content-Range", `exams 0-${count}/${count}`);
      res.status(200).send(exams);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get a single exam
  get: async (req, res) => {
    try {
      const examId = req.params.id;
      const exam = await Exam.findById(examId);
      res.status(200).send(exam);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#update a exam
  update: async (req, res) => {
    try {
      const examId = req.params.id;
      const updates = req.body;
      await Exam.findByIdAndUpdate(examId, updates);
      const examToUpdate = await Exam.findById(examId);
      res.status(200).send({ data: examToUpdate });
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#delete a exam
  delete: async (req, res) => {
    try {
      const examId = req.params.id;
      const examToDelete = await Exam.findById(examId);
      await Exam.findByIdAndDelete(examId);
      res.status(200).send({ data: examToDelete });
    } catch (e) {
      res.status(500).send(e);
    }
  },
};
