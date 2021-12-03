const router = require("express").Router();
const db = require("../models");

router.post("/api/workout", ({ body }, res) => {
  db.Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

router.get("/api/workout", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

module.exports = router;
