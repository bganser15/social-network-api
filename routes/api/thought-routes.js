const router = require("express").Router();

const {
  addThought,
  getAllThoughts,
  getThoughtById,
} = require("../../controllers/thoughts-controller");

// /api/thought
router.route("/").post(addThought).get(getAllThoughts);


// api/thought/:id
router.route("/:id").get(getThoughtById);
//add put and delete reauests here

module.exports = router;
