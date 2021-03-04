const router = require("express").Router();
const Fitness = require("../models/fitness");

router.get("/api/workouts", (req, res) => {
  Fitness.find({})
    .then(dbFitness => {
        dbFitness.forEach(fitness => {
            var total = 0;
            fitness.exercises.forEach(t => {
                total += t.duration;
            });
            fitness.totalDuration = total;
        });
        res.json(dbFitness)
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Fitness.findByIdAndUpdate({_id: req.params.id},
    {
        $inc: { totalDuration: req.body.duration },
        $push: { exercises: req.body }
    },
    { new: true }
    )
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    Fitness.create(body).then((dbFitness => {
        res.json(dbFitness);
    })).catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {

    Fitness.find({}).then(dbFitness => {
        res.json(dbFitness);
    }).catch(err => {
        res.json(err);
    });

});

module.exports = router;
