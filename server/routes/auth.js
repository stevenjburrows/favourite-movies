const express = require("express");
const db = require("../db/index");
const router = express();

router.post("/", async (req, res, next) => {
    let username = req.body.un;
    let password = req.body.pw
  try {
    let results = await db.auth(username);
    // res.json(results.rows[0].pword)
    if (results.rows[0].pword === password) {
        let id =results.rows[0].id
        try {
            let results = await db.single(id);
            res.json(results.rows)
          } catch (e) {
            console.log(e);
            res.sendStatus(500);
          }
    } else {
        return res.json({'error': 'Invalid username or password'})
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;