const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  axios.get(`http://dataservice.accuweather.com/currentconditions/v1/23977_PC?apikey=${process.env.ACCU_API_KEY}`)
  .then(response => res.send(response.data))

  .catch(error => {
      console.log('error is: ', error);
      res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
