// controller will grab schema from the model
// Meaning we have a user name and 
const User = require('../models/user.model');

module.exports.sayHello = (req, res) => {
    res.json({msg: "did this connect and say hello"})
}

// Find ALL users
module.exports.findAllUsers = (req, res) => {
    User.find()
        .then(allUsers => {
            res.json({ results: allUsers })
        })
        .catch(err => {
            res.json({ msg: "something went wrong finding users", error: err})
        })
}

// Create a user
// Validate if user title exists already
module.exports.createUser = (req, res) => {
    User.exists({ userTitle: req.body.userTitle })
        .then(userExists => {
            if(userExists) {
                // the promise .reject activates the .catch that occurs after outside a layer of the scope.
                return Promise.reject("User found in database")
            } return User.create(req.body);
        })
        .then(saveResult => res.json(saveResult))
        .catch(err => res.json(err));
}

// Find one user
// To be used in an edit user page
module.exports.findOneUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(foundUser => {
            res.json({ results: foundUser })
        })
        .catch(err => {
            res.json({ msg: "err finding one", error: err})
        })
}

// Update a user
// Submitting the editted user
module.exports.updateUser = (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id },
        req.body,
        { new: true, runValidators: true})
            .then(updateUser => {
                res.json({ results: updateUser })
            })
            .catch(err => {
                res.json({ msg: "something went wrong during the update", error: err})
            })
}

// Delete a user
// I am practicing CRUD app development
module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(deleteUser => {
            res.json({ results: deleteUser })
        })
        .catch(err => {
            res.json({ msg: "something wrong in deletion", error: err})
        })
}