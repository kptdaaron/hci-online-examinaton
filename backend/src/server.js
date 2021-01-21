const userRoutes = require("./routes/userRoute");
const facultyRoutes = require("./routes/facultyRoute");
const adminRoutes = require("./routes/adminRoute");
const programRoutes = require("./routes/programRoute");
const courseRoutes = require("./routes/courseRoute");
const examRoutes = require("./routes/examRoute");
const sectionRoutes = require("./routes/sectionRoute");

const connectDB = require('../config/db')

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

connectDB();

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

userRoutes(app);
sectionRoutes(app);
adminRoutes(app);
facultyRoutes(app);
programRoutes(app);
courseRoutes(app);
examRoutes(app);
