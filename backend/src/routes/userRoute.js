const userController = require('../controllers/userController');

module.exports = (app) => {
  //# create a note
  app.post('/api/users', userController.create);

  //#get the list of users
  app.get('/api/users', userController.fetch);

  //#get a single note
  app.get('/api/users/:id', userController.get);

  //#update a note
  app.put('/api/users/:id', userController.update);

  //#delete a note
  app.delete('/api/users/:id', userController.delete);
};
