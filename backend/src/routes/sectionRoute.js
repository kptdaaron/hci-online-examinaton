const sectionController = require("../controllers/sectionController");

module.exports = (app) => {
  //# create a section
  app.post("/api/sections", sectionController.create);

  //#get the list of sections
  app.get("/api/sections", sectionController.fetch);

  //#get a single section
  app.get("/api/sections/:id", sectionController.get);

  //#update a section
  app.put("/api/sections/:id", sectionController.update);

  //#delete a section
  app.delete("/api/sections/:id", sectionController.delete);
};
