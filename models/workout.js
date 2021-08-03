const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  day: { type: date, default: Now },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {},
      weight: {},
      sets: {},
      reps: {},
      duration: {},
      distance: {},
    },
  ],
});

const workout = mongoose.model("Workout", workoutSchema);
module.exports = workout;
