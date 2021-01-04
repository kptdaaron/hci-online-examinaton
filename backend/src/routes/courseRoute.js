const courseController = require('../controllers/courseController');

module.exports = (app) => {
  //# create a note
  app.post('/api/courses', courseController.create);

  //#get the list of courses
  app.get('/api/courses', courseController.fetch);

  //#get a single note
  app.get('/api/courses/:id', courseController.get);

  //#update a note
  app.put('/api/courses/:id', courseController.update);

  //#delete a note
  app.delete('/api/courses/:id', courseController.delete);
};
