const programController = require("../controllers/programController");

module.exports = (app) => {
  //# create a note
  app.post("/api/programs", programController.create);

  //#get the list of program
  app.get("/api/programs", programController.fetch);

  //#get a single note
  app.get("/api/programs/:id", programController.get);

  //#update a note
  app.put("/api/programs/:id", programController.update);

  //#delete a note
  app.delete("/api/programs/:id", programController.delete);
};
