// Securing our connection to database + using destructuring.
const {connect, mongo, default: mongoose} = require('mongoose');
const {config} = require('dotenv');

// The following is Bonus: for securing credentials (paired with server.js).
// module.exports to import file in our server for secure communication.
module.exports = () => {
    // Invoke dotenv config availability of variables
    config();

    // NEW: Mongoose 7, will be set back to false, to suppress warning and be ahead of the change == Add Below ==
    mongoose.set('strictQuery', false);

    // Establish our uri with dotenv
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LOC}.vddhv.mongodb.net/test`;
        // Our db info are passed as options rather than within our connection string.
        // We also removed deprecated options of useFindAndModify + useCreateIndex, etc.
        connect(uri, {
            dbName: process.env.DB_NAME,
        })
        .then(() => {
            console.log('Connection to DB Established');
        })
        .catch(error => console.error(error.message));
        // Our connect method returns a PROMISE, so we use .then(), .catch()
}