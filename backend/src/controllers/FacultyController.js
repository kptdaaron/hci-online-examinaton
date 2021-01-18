const Faculty = require("../models/Faculty");

module.exports = {
  //# create a faculty
  create: async (req, res) => {
    try {
      const faculty = req.body;
      const newFaculty = await Faculty.create(faculty);
      res.status(201).send(newFaculty);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get the list of faculty
  fetch: async (req, res) => {
    try {
      const faculty = await Faculty.find({});
      const count = await Faculty.countDocuments({});
      res.setHeader("Access-Control-Expose-Headers", "Content-Range");
      res.setHeader("Content-Range", `faculty 0-${count}/${count}`);
      res.status(200).send(faculty);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get a single faculty
  get: async (req, res) => {
    try {
      const facultyId = req.params.id;
      const faculty = await Faculty.findById(facultyId);
      res.status(200).send(faculty);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#update a faculty
  update: async (req, res) => {
    try {
      const facultyId = req.params.id;
      const updates = req.body;
      await Faculty.findByIdAndUpdate(facultyId, updates);
      const facultyToUpdate = await Faculty.findById(facultyId);
      res.status(200).send({ data: facultyToUpdate });
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#delete a faculty
  delete: async (req, res) => {
    try {
      const facultyId = req.params.id;
      const facultyToDelete = await Faculty.findById(facultyId);
      await Faculty.findByIdAndDelete(facultyId);
      res.status(200).send({ data: facultyToDelete });
    } catch (e) {
      res.status(500).send(e);
    }
  },
};
