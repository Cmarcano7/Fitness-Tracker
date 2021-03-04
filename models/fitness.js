const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: true
        },
        name: {
          type: String,
          trim: true,
          required: true
        },
        duration: {
          type: Number,
          required: true
        },
        weight: {
          type: Number,
          default: 0
        },
        reps: {
          type: Number,
          default: 0
        },
        sets: {
          type: Number,
          default: 0
        },
        distance: {
          type: Number,
          default: 0
        }
      }
    ],
    totalDuration: {
      type: Number,
      default: 0,
    },
    day: {
        type: Date,
        default: Date.now
    },
  
  });
  
const Fitness = mongoose.model("fitness", fitnessSchema);
  
module.exports = Fitness;

