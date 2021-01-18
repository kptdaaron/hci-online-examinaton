const programController = require("../controllers/programController");

module.exports = (app) => {
  //# create a program
  app.post("/api/programs", programController.create);

  //#get the list of program
  app.get("/api/programs", programController.fetch);

  //#get a single program
  app.get("/api/programs/:id", programController.get);

  //#update a program
  app.put("/api/programs/:id", programController.update);

  //#delete a program
  app.delete("/api/programs/:id", programController.delete);
};
