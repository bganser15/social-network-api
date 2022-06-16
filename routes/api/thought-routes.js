const router = require("express").Router();

const { addThought } = require("../../controllers/thoughts-controller");
// /api/thought
router.route("/").post(addThought);

module.exports = router;
