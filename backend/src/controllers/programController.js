const Program = require('../models/Program');

module.exports = {
  //# create a program
  create: async (req, res) => {
    try {
      const program = req.body;
      const newProgram = await Program.create(program);
      res.status(201).send(newProgram);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get the list of programs
  fetch: async (req, res) => {
    try {
      const programs = await Program.find({});
      res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
      res.setHeader('Content-Range', 0-5/5);
      res.status(200).send(programs);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get a single program
  get: async (req, res) => {
    try {
      const programId = req.params.id;
      const program = await Program.findById(programId);
      res.status(200).send(program);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#update a program
  update: async (req, res) => {
    try {
      const programId = req.params.id;
      const updates = req.body;
      await Program.findByIdAndUpdate(programId, updates);
      const programToUpdate = await Program.findById(programId);
      res.status(200).send({ data: programToUpdate });
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#delete a program
  delete: async (req, res) => {
    try {
      const programId = req.params.id;
      const programToDelete = await Program.findById(programId);
      await Program.findByIdAndDelete(programId);
      res.status(200).send({ data: programToDelete });
    } catch (e) {
      res.status(500).send(e);
    }
  },
};