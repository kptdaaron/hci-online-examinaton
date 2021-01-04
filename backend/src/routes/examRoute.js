const examController = require('../controllers/examController.js');

module.exports = (app) => {

    app.post('/api/exams', examController.create);

    app.get('/api/exams', examController.fetch);

    app.get('/api/exams/:id', examController.get);

    app.put('/api/exams/:id', examController.update);

    app.delete('/api/exams/:id', examController.delete);
    
}