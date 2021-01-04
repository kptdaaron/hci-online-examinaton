const Course = require('../models/Course');

module.exports = {
  //# create a course
  create: async (request, reply) => {
    try {
      const course = request.body;
      const newCourse = await Course.create(course);
      reply.code(201).send(newCourse);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#get the list of courses
  fetch: async (request, reply) => {
    try {
      const courses = await Course.find({});
      reply.code(200).send(courses);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#get a single course
  get: async (request, reply) => {
    try {
      const courseId = request.params.id;
      const course = await Course.findById(courseId);
      reply.code(200).send(course);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#update a course
  update: async (request, reply) => {
    try {
      const courseId = request.params.id;
      const updates = request.body;
      await Course.findByIdAndUpdate(courseId, updates);
      const courseToUpdate = await Course.findById(courseId);
      reply.code(200).send({ data: courseToUpdate });
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#delete a course
  delete: async (request, reply) => {
    try {
      const courseId = request.params.id;
      const courseToDelete = await Course.findById(courseId);
      await Course.findByIdAndDelete(courseId);
      reply.code(200).send({ data: courseToDelete });
    } catch (e) {
      reply.code(500).send(e);
    }
  },
};