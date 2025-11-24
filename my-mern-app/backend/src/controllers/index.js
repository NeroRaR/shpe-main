//const UserController = require('../controllers/userController');
//const PostController = require('../controllers/postController');

//module.exports = {
//    UserController,
 //   PostController
//};

// src/controllers/index.js
const exampleFunction = (req, res) => {
  res.json({ message: "Backend API is connected!" });
};

module.exports = { exampleFunction };
