// BONUS: Import deconstructing from dotenv and invoking dotenv.
const { config } = require('dotenv');
config();
        // -- Step 1 --
const express = require("express");
const cors = require("cors");
const app = express();

// store DOTENV port information
const port = process.env.PORT;

        // -- Step 2 --
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// -- Step 3 --

// -- Routes --
// Default Commented || Uncomment once models > controllers > routes are established.
// Once ready for testing in Postman, uncomment the following lines
const AllMyUserRoutes = require('./server/routes/user.routes.js');
AllMyUserRoutes(app);

/*
* Connection to DB, if error, check on correct file structures and file nomenclature.
* For React18 + MongoDB Cloud (Backend). Also notice, when using DOTENV, the ending if ();
* This is needed for establishing our connection securely from the original way
* require("./server/config/mongoose.config");
*/
require('./server/config/mongoose.config')();

// Custom Response on Succesful connection to our backend
app.listen(port, () => console.log(`Listening on port: ${port}`));