const roleController = require("../controllers/roleController");

module.exports = (app) => {
  app.get("/api/role", roleController.fetch);
};
