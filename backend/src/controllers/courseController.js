const Course = require('../models/Course');

module.exports = {
  //# create a course
  create: async (req, res) => {
    try {
      const course = req.body;
      const newCourse = await Course.create(course);
      res.status(201).send(newCourse);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get the list of courses
  fetch: async (req, res) => {
    try {
      const courses = await Course.find({});
      res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
      res.setHeader('Content-Range', 0-5/5);
      res.status(200).send(courses);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get a single course
  get: async (req, res) => {
    try {
      const courseId = req.params.id;
      const course = await Course.findById(courseId);
      res.status(200).send(course);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#update a course
  update: async (req, res) => {
    try {
      const courseId = req.params.id;
      const updates = req.body;
      await Course.findByIdAndUpdate(courseId, updates);
      const courseToUpdate = await Course.findById(courseId);
      res.status(200).send({ data: courseToUpdate });
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#delete a course
  delete: async (req, res) => {
    try {
      const courseId = req.params.id;
      const courseToDelete = await Course.findById(courseId);
      await Course.findByIdAndDelete(courseId);
      res.status(200).send({ data: courseToDelete });
    } catch (e) {
      res.status(500).send(e);
    }
  },
};