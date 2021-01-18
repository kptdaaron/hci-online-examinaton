const Admin = require("../models/Admin");

module.exports = {
  //# create a admin
  create: async (req, res) => {
    try {
      const admin = req.body;
      const newAdmin = await Admin.create(admin);
      res.status(201).send(newAdmin);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get the list of admins
  fetch: async (req, res) => {
    try {
      const admins = await Admin.find({});
      const count = await Admin.countDocuments({});
      res.setHeader("Access-Control-Expose-Headers", "Content-Range");
      res.setHeader("Content-Range", `admins 0-${count}/${count}`);
      res.status(200).send(admins);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#get a single admin
  get: async (req, res) => {
    try {
      const adminId = req.params.id;
      const admin = await Admin.findById(adminId);
      res.status(200).send(admin);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#update a admin
  update: async (req, res) => {
    try {
      const adminId = req.params.id;
      const updates = req.body;
      await Admin.findByIdAndUpdate(adminId, updates);
      const adminToUpdate = await Admin.findById(adminId);
      res.status(200).send({ data: adminToUpdate });
    } catch (e) {
      res.status(500).send(e);
    }
  },

  //#delete a admin
  delete: async (req, res) => {
    try {
      const adminId = req.params.id;
      const adminToDelete = await Admin.findById(adminId);
      await Admin.findByIdAndDelete(adminId);
      res.status(200).send({ data: adminToDelete });
    } catch (e) {
      res.status(500).send(e);
    }
  },
};
