const { Schema, model } = require("mongoose");

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    reactionBody: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    username: {
        type: String,
        required: true,

    },
    createdAt: {
        type: String,
        default: Date.now()

    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
      }
    ],
    friends: [],
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

// get total count of comments and replies on retrieval
UserSchema.virtual('thoughtCount').get(function() {
  return this.comments.length;
});

const User = model("User", UserSchema);

module.exports = User;