const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts);

router.route("/:thoughtId").get(getThoughtsById).put(updateThought);

router.route("/:userId").post(createThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:userId/:thoughtId").delete(deleteThought);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
