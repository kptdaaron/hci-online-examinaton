const Role = require('../models/Role');

module.exports = {
  //# create a role
  create: async (request, reply) => {
    try {
      const role = request.body;
      const newRole = await Role.create(role);
      reply.code(201).send(newRole);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#get the list of roles
  fetch: async (request, reply) => {
    try {
      const roles = await Role.find({});
      // reply.setHeader('Access-Control-Expose-Headers', 'Content-Range');
      // reply.setHeader('Content-Range', 0-5/5);
      reply.code(200).send(roles);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#get a single role
  get: async (request, reply) => {
    try {
      const roleId = request.params.id;
      const role = await Role.findById(roleId);
      reply.code(200).send(role);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#update a role
  update: async (request, reply) => {
    try {
      const roleId = request.params.id;
      const updates = request.body;
      await Role.findByIdAndUpdate(roleId, updates);
      const roleToUpdate = await Role.findById(roleId);
      reply.code(200).send({ data: roleToUpdate });
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#delete a role
  delete: async (request, reply) => {
    try {
      const roleId = request.params.id;
      const roleToDelete = await Role.findById(roleId);
      await Role.findByIdAndDelete(roleId);
      reply.code(200).send({ data: roleToDelete });
    } catch (e) {
      reply.code(500).send(e);
    }
  },
};