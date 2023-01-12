// Store Mongoose functionality object
const mongoose = require("mongoose");

// NOTE: We model our data here, will have functionality inside of the controllers per schema.
// We are keeping this simple as data, I want to post and view posts as I put them in, maybe reorder in the future.

const UserSchema = new mongoose.Schema(
    {
        userName: {
            type: String
        },
        userDesc: {
            type: String
        }
    },
    { timestamps: true }
);

// this saves to db
const User = mongoose.model("User", UserSchema);

// exportable, used in controller
module.exports = User;