const User = require('../models/User');

module.exports = {
  //# create a user
  create: async (req, res) => {
    try {
      const user = req.body;
      const newUser = await User.create(user);
      res.status(201).send(newUser);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get the list of users
  fetch: async (req, res) => {
    try {
      const users = await User.find({});
      res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
      res.setHeader('Content-Range', 0-5/5);
      res.status(200).send(users);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get a single user
  get: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      res.status(200).send(user);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#update a user
  update: async (req, res) => {
    try {
      const userId = req.params.id;
      const updates = req.body;
      await User.findByIdAndUpdate(userId, updates);
      const userToUpdate = await User.findById(userId);
      res.status(200).send({ data: userToUpdate });
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#delete a user
  delete: async (req, res) => {
    try {
      const userId = req.params.id;
      const userToDelete = await User.findById(userId);
      await User.findByIdAndDelete(userId);
      res.status(200).send({ data: userToDelete });
    } catch (e) {
      res.status(500).send(e);
    }
  },
};