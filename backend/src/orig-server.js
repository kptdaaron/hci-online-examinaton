// const fastify = require('fastify');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');
const programRoutes  = require('./routes/programRoute');
const courseRoutes = require('./routes/courseRoute');
const examRoutes = require('./routes/examRoute');
// const userRangeHook = require('./hooks/userRangeHook');
// const courseRangeHook = require('./hooks/courseRangeHook');
const db = require("./models");
const Role = db.role;
const dbConfig = require("./config");

var corsOptions = {
    origin: "http://localhost:5001"
  };

  app.use(cors(corsOptions));
  
  // parse requests of content-type - application/json
  app.use(bodyParser.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

// @Connecting to Database
const MONGODB_CONNECTION_STRING='mongodb+srv://dbadmin:dbadmin@cluster0.82mg3.mongodb.net/database?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;

// mongoose.connect(MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
//     .then(() => app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
//     .catch((error => console.log(error.message)));

//     mongoose.set('useFindAndModify', false);

db.mongoose
  .connect(MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

    function initial() {
      Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
          new Role({
            name: "student"
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
    
            console.log("added 'student' to roles collection");
          });
    
          new Role({
            name: "faculty"
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
    
            console.log("added 'faculty' to roles collection");
          });
    
          new Role({
            name: "admin"
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
    
            console.log("added 'admin' to roles collection");
          });
        }
      });
    }
    


// const userRange = app.addHook('preHandler', userRangeHook);
userRoutes(app);
programRoutes(app);
courseRoutes(app);
examRoutes(app);

