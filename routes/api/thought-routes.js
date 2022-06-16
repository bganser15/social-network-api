const router = require("express").Router();

const {
  addThought,
  getAllThoughts,
} = require("../../controllers/thoughts-controller");
// /api/thought
router.route("/").post(addThought).get(getAllThoughts);

module.exports = router;
