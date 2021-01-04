const Program = require('../models/Program');

module.exports = {
  //# create a program
  create: async (request, reply) => {
    try {
      const program = request.body;
      const newProgram = await Program.create(program);
      reply.code(201).send(newProgram);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#get the list of programs
  fetch: async (request, reply) => {
    try {
      const programs = await Program.find({});
      reply.code(200).send(programs);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#get a single program
  get: async (request, reply) => {
    try {
      const programId = request.params.id;
      const program = await Program.findById(programId);
      reply.code(200).send(program);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#update a program
  update: async (request, reply) => {
    try {
      const programId = request.params.id;
      const updates = request.body;
      await Program.findByIdAndUpdate(programId, updates);
      const programToUpdate = await Program.findById(programId);
      reply.code(200).send({ data: programToUpdate });
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#delete a program
  delete: async (request, reply) => {
    try {
      const programId = request.params.id;
      const programToDelete = await Program.findById(programId);
      await Program.findByIdAndDelete(programId);
      reply.code(200).send({ data: programToDelete });
    } catch (e) {
      reply.code(500).send(e);
    }
  },
};