const Exam = require('../models/Exam');

module.exports = {
  //# create a exam
  create: async (request, reply) => {
    try {
      const exam = request.body;
      const newExam = await Exam.create(exam);
      reply.code(201).send(newExam);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#get the list of exams
  fetch: async (request, reply) => {
    try {
      const exams = await Exam.find({});
      reply.code(200).send(exams);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#get a single exam
  get: async (request, reply) => {
    try {
      const examId = request.params.id;
      const exam = await Exam.findById(examId);
      reply.code(200).send(exam);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#update a exam
  update: async (request, reply) => {
    try {
      const examId = request.params.id;
      const updates = request.body;
      await Exam.findByIdAndUpdate(examId, updates);
      const examToUpdate = await Exam.findById(examId);
      reply.code(200).send({ data: examToUpdate });
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#delete a exam
  delete: async (request, reply) => {
    try {
      const examId = request.params.id;
      const examToDelete = await Exam.findById(examId);
      await Exam.findByIdAndDelete(examId);
      reply.code(200).send({ data: examToDelete });
    } catch (e) {
      reply.code(500).send(e);
    }
  },
};