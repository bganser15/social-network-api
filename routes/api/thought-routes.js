const router = require("express").Router();

const {
  addThought,
  getAllThoughts,
  getThoughtById,
  removeThought,
} = require("../../controllers/thoughts-controller");

// /api/thought
router.route("/").post(addThought).get(getAllThoughts);

// api/thought/:id
router.route("/:id").get(getThoughtById);

//add put and delete reauests here
router.route("/:userId/:thoughtId").delete(removeThought);

module.exports = router;
