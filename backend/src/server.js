// const fastify = require("fastify");
const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./config");
const userRoutes = require('./routes/userRoute')
const roleRoutes = require('./routes/roleRoute')
const programRoutes  = require('./routes/programRoute');
const courseRoutes = require('./routes/courseRoute');
const examRoutes = require('./routes/examRoute');
// const app = fastify();
const app = express();
const userRangeHook = require('./hooks/userRangeHook');

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.role;

const MONGODB_CONNECTION_STRING='mongodb+srv://dbadmin:dbadmin@cluster0.82mg3.mongodb.net/database?retryWrites=true&w=majority';

db.mongoose
  .connect(MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// routes
// require("./app/routes/auth.routes")(app);
// require("./app/routes/user.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 5000;
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
roleRoutes(app);
programRoutes(app);
courseRoutes(app);
examRoutes(app);