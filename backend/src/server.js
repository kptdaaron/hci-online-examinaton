const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoute");
const roleRoutes = require("./routes/roleRoute");
const programRoutes = require("./routes/programRoute");
const courseRoutes = require("./routes/courseRoute");
const examRoutes = require("./routes/examRoute");

// for fastify server setup
// const fastify = require("fastify")();
// const app = fastify;

// app.register(require('fastify-cors'), {
//   origin: /^http:\/\/103\.137\.220\.250:5000/
// })
// const userRange = app.addHook('preHandler', userRangeHook);

// for express server setup
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
var corsOptions = {
  origin: "localhost",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./models");
const Role = db.role;

const MONGODB_CONNECTION_STRING =
  "mongodb+srv://dbadmin:dbadmin@cluster0.82mg3.mongodb.net/database?retryWrites=true&w=majority";

db.mongoose
  .connect(MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    // initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// function initial() {
//   Role.estimatedDocumentCount((err, count) => {
//     if (!err && count === 0) {
//       new Role({
//         name: "admin",
//         members: Array,
//       }).save((err) => {
//         if (err) {
//           console.log("error", err);
//         }

//         console.log("added 'admin' to roles collection");
//       });
//     }
//   });
// }

userRoutes(app);
roleRoutes(app);
programRoutes(app);
courseRoutes(app);
examRoutes(app);
