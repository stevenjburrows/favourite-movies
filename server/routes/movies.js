require('dotenv').config()
const axios = require('axios').default;
const express = require('express');
const router = express.Router();

// import hidden variables, ID is the company ID
const apiKey = process.env.IMDB_API_KEY;

//setting the base URL to make it easy to add more
axios.defaults.baseURL = 'http://www.omdbapi.com'



router.get("/", function (req, res, next) {
    const imdb = req.query.imdb
    const url = `?i=${imdb}&apikey=${apiKey}`
    console.log(url);
    axios(url, {
      method: 'get',
    
    })
    .then(response => {
        if(response.status >= 200 && response.status < 300){
            return res.json(response.data);
          }
          return Promise.reject(new Error(response.statusText));
        })
    })
  

module.exports = router;