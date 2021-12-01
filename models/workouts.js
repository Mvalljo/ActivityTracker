const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  excersie: [
    {
      type: {
        type: String
      },
      name: {
        type: String
      },
      distance: {
        type: Number
      },
      duration: {
        type: Number
      },
      weight: {
        type: Number
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      }
    }
  ],
  day: {
    type: Date,
    default: Date.now
  }
});

const Workouts = mongoose.model("Workouts", workoutSchema);

module.exports = Workouts;
