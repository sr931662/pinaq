// router/auth-router.js

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth-middleware");
const {
  register,
  login,
  getUser,
  logout
} = require("../controller/auth-controller");

router.post("/sign-up", register);
router.post("/login", login);
router.get("/user", authMiddleware, getUser);
router.get("/logout", logout);

module.exports = router;
