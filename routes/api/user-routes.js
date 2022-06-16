const router = require("express").Router();

const {
  createUser,
  getAllUser,
  getUserById,
} = require("../../controllers/user-controller");

// /api/user
router.route("/").post(createUser).get(getAllUser);

// api/user/:id
router.route("/:id").get(getUserById);

module.exports = router;
