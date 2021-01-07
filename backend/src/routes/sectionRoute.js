const sectionController = require("../controllers/sectionController");

module.exports = (app) => {
  //# create a note
  app.post("/api/sections", sectionController.create);

  //#get the list of sections
  app.get("/api/sections", sectionController.fetch);

  //#get a single note
  app.get("/api/sections/:id", sectionController.get);

  //#update a note
  app.put("/api/sections/:id", sectionController.update);

  //#delete a note
  app.delete("/api/sections/:id", sectionController.delete);
};
