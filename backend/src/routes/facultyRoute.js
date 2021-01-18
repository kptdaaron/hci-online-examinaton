const facultyController = require("../controllers/facultyController");

module.exports = (app) => {
  //# create a faculty
  app.post("/api/faculty", facultyController.create);

  //#get the list of facultys
  app.get("/api/faculty", facultyController.fetch);

  //#get a single faculty
  app.get("/api/faculty/:id", facultyController.get);

  //#update a faculty
  app.put("/api/faculty/:id", facultyController.update);

  //#delete a faculty
  app.delete("/api/faculty/:id", facultyController.delete);
};
