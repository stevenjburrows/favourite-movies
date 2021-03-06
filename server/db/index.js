const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const Pool = require('pg').Pool;
const { Connection } = require("pg");
const connectionString = process.env.uri
const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }
})
let pgdb = {};
pgdb.all = () => {
  
  return new Promise((resolve, reject) => {
     pool.query(
      `SELECT * FROM users`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
}

pgdb.single = (id) => {
  
  return new Promise((resolve, reject) => {
    
    pool.query(
      `SELECT id,firstname,lastname,favourite_movies FROM users WHERE id = $1`, [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
}

pgdb.auth = (username) => {
  
  return new Promise((resolve, reject) => {
    
    pool.query(
      `SELECT id,pword FROM users WHERE username = $1`, [username],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
}

pgdb.updateMovies = (movieArray, id) => {
  return new Promise(( resolve, reject) => {

    pool.query(
      `UPDATE users SET favourite_movies = $1 WHERE id = $2`, [movieArray, id],
      (err, results) => {
        if (err) {
          return reject(err)
        }
        return resolve(results)
      }
    )
  })
}



module.exports = pgdb;