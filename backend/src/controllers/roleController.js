const Role = require("../models/Role");

module.exports = {
  //# create a role
  create: async (req, res) => {
    try {
      const role = req.body;
      const newRole = await Role.create(role);
      res.status(201).send(newRole);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get the list of roles
  fetch: async (req, res) => {
    try {
      const roles = await Role.find({});
      res.setHeader("Access-Control-Expose-Headers", "Content-Range");
      res.setHeader("Content-Range", 0 - 5 / 5);
      res.status(200).send(roles);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get a single role
  get: async (req, res) => {
    try {
      const roleId = req.params.id;
      const role = await Role.findById(roleId);
      res.status(200).send(role);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#update a role
  update: async (req, res) => {
    try {
      const roleId = req.params.id;
      const updates = req.body;
      await Role.findByIdAndUpdate(roleId, updates);
      const roleToUpdate = await Role.findById(roleId);
      res.status(200).send({ data: roleToUpdate });
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#delete a role
  delete: async (req, res) => {
    try {
      const roleId = req.params.id;
      const roleToDelete = await Role.findById(roleId);
      await Role.findByIdAndDelete(roleId);
      res.status(200).send({ data: roleToDelete });
    } catch (e) {
      res.status(500).send(e);
    }
  },
};
