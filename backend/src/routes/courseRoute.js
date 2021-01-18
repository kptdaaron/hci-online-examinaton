const courseController = require("../controllers/courseController");

module.exports = (app) => {
  //# create a course
  app.post("/api/courses", courseController.create);

  //#get the list of courses
  app.get("/api/courses", courseController.fetch);

  //#get a single course
  app.get("/api/courses/:id", courseController.get);

  //#update a course
  app.put("/api/courses/:id", courseController.update);

  //#delete a course
  app.delete("/api/courses/:id", courseController.delete);
};
