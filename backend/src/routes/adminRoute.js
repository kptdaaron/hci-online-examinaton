const adminController = require("../controllers/adminController");

module.exports = (app) => {
  //# create a admin
  app.post("/api/admin", adminController.create);

  //#get the list of admin
  app.get("/api/admin", adminController.fetch);

  //#get a single admin
  app.get("/api/admin/:id", adminController.get);

  //#update a admin
  app.put("/api/admin/:id", adminController.update);

  //#delete a admin
  app.delete("/api/admin/:id", adminController.delete);
};
