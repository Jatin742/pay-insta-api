const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../Controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../Middlewares/auth");

const Router = express.Router();

Router.route("/register").post(registerUser);

Router.route("/login").post(loginUser);

Router.route("/logout").get(logout);

Router.route("/me").get(isAuthenticatedUser, getUserDetails);

Router.route("/password/update").put(isAuthenticatedUser, updatePassword);

Router.route("/me/update").put(isAuthenticatedUser, updateProfile);

Router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);

Router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = Router;
