const Section = require("../models/Section");

module.exports = {
  //# create a section
  create: async (req, res) => {
    try {
      const section = req.body;
      const newSection = await Section.create(section);
      res.status(201).send(newSection);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get the list of sections
  fetch: async (req, res) => {
    try {
      const sections = await Section.find({});
      const count = await Section.countDocuments({});
      res.setHeader("Access-Control-Expose-Headers", "Content-Range");
      res.setHeader("Content-Range", `sections 0-${count}/${count}`);
      res.status(200).send(sections);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get a single section
  get: async (req, res) => {
    try {
      const sectionId = req.params.id;
      const section = await Section.findById(sectionId);
      res.status(200).send(section);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#update a section
  update: async (req, res) => {
    try {
      const sectionId = req.params.id;
      const updates = req.body;
      await Section.findByIdAndUpdate(sectionId, updates);
      const sectionToUpdate = await Section.findById(sectionId);
      res.status(200).send({ data: sectionToUpdate });
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#delete a section
  delete: async (req, res) => {
    try {
      const sectionId = req.params.id;
      const sectionToDelete = await Section.findById(sectionId);
      await Section.findByIdAndDelete(sectionId);
      res.status(200).send({ data: sectionToDelete });
    } catch (e) {
      res.status(500).send(e);
    }
  },
};
