const userController = require("../controllers/userController");

module.exports = (app) => {
  //# create a user
  app.post("/api/users", userController.create);

  //#get the list of users
  app.get("/api/users", userController.fetch);

  //#get a single user
  app.get("/api/users/:id", userController.get);

  //#update a user
  app.put("/api/users/:id", userController.update);

  //#delete a user
  app.delete("/api/users/:id", userController.delete);
};
