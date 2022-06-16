const Thoughts = require("../models/Thoughts");
const User = require("../models/User");

const thoughtController = {
  addThought({ params, body }, res) {
    console.log(body);
    Thoughts.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbthoughtData) => {
        if (!dbthoughtData) {
          res.status(404).json({ message: "No User found with this id" });
          return;
        }
        res.json(dbthoughtData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
