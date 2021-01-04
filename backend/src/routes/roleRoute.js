const roleController = require('../controllers/roleController');

module.exports = (app) => {
    app.get('/api/roles', roleController.fetch);
}