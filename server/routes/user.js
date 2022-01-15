const express = require("express");
const db = require("../db/index");
const router = express();

router.get("/all", async (req, res, next) => {
  try {
    let results = await db.all();
    res.json(results.rows)
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/user", async (req, res, next) => {
  let id = req.query.id;
  try {
    let results = await db.single(id);
    res.json(results.rows)
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/updatemovies", async (req, res, next) => {

  let movies = req.body.movies;
  let id = req.body.id;
  try {
    let results = await db.updateMovies(movies, id)
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
})
module.exports = router;