const User = require('../models/User');

module.exports = {
  //# create a user
  create: async (request, reply) => {
    try {
      const user = request.body;
      const newUser = await User.create(user);
      reply.code(201).send(newUser);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#get the list of users
  fetch: async (request, reply) => {
    try {
      const users = await User.find({});
      // reply.setHeader('Access-Control-Expose-Headers', 'Content-Range');
      // reply.setHeader('Content-Range', 0-5/5);
      reply.code(200).send(users);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#get a single user
  get: async (request, reply) => {
    try {
      const userId = request.params.id;
      const user = await User.findById(userId);
      reply.code(200).send(user);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#update a user
  update: async (request, reply) => {
    try {
      const userId = request.params.id;
      const updates = request.body;
      await User.findByIdAndUpdate(userId, updates);
      const userToUpdate = await User.findById(userId);
      reply.code(200).send({ data: userToUpdate });
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#delete a user
  delete: async (request, reply) => {
    try {
      const userId = request.params.id;
      const userToDelete = await User.findById(userId);
      await User.findByIdAndDelete(userId);
      reply.code(200).send({ data: userToDelete });
    } catch (e) {
      reply.code(500).send(e);
    }
  },
};