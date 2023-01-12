const UserController = require("../controllers/user.controller")

module.exports = (app) => {

    // routes that will go towards the controller to query the database accordingly with the server.js

    // find all users
    app.get("/api/users", UserController.findAllUsers);

    // create a user
    app.post("/api/users", UserController.createUser);

    // find a user
    app.get("/api/users/:id", UserController.findOneUser);

    // update a user
    app.put("/api/users/:id", UserController.updateUser)

    // delete a users
    app.delete("/api/users/:id", UserController.deleteUser);
}