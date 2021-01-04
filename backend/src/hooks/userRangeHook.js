const User = require('../models/User');

module.exports = (request, reply, done) => {
   User.count({}, (err, count) => {
    if (err) {
      console.error(err);
      reply.code(500).send('Error!');
    }
    reply.header('Content-Range', `users 0-${count}/${count}`);
    done();
  });
};

