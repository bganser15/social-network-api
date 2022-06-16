const { Schema, model } = require("mongoose");

const ThoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      default: Date.now(),
    },
    username: {
      type: String,
      required: true,
    },

    reactions: [],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false,
  }
);

const Thoughts = model("Thoughts", ThoughtsSchema);

module.exports = Thoughts;
