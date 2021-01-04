const Course = require('../models/User');

module.exports = (request, reply, done) => {
   Course.countDocuments({}, (err, count) => {
    if (err) {
      console.error(err);
      reply.code(500).send('Error!');
    }
    reply.header('Content-Range', `course 0-${count}/${count}`);
    done();
  });
};

