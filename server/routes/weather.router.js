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
  console.log(req.user.id);
  let userId = req.user.id;
  let queryText = `SELECT "location_key"
  FROM "user"
  WHERE "id" = $1;`
  pool.query(queryText, [userId])
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      res.sendStatus(500);
    })


  axios.get(`http://dataservice.accuweather.com/currentconditions/v1/23977_PC?apikey=${process.env.ACCU_API_KEY}`)
    .then((conditionsResponse) => {
      axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/23977_PC?apikey=${process.env.ACCU_API_KEY}`)
        .then((fiveDayResponse) => {
          let weatherResponse = {}
          weatherResponse.conditions = conditionsResponse.data;
          weatherResponse.fiveDay = fiveDayResponse.data;
          res.send(weatherResponse);
        })
    })



  // axios.get(`http://dataservice.accuweather.com/currentconditions/v1/23977_PC?apikey=${process.env.ACCU_API_KEY}`)
  //   .then(response => res.send(response.data))
  //   .catch(error => {
  //     console.log('error is: ', error);
  //     res.sendStatus(500);
  //   })



  // axios.get(`http://dataservice.accuweather.com/currentconditions/v1/23977_PC?apikey=${process.env.ACCU_API_KEY}`)
  //   .then(response => res.send(response.data))

  //   .catch(error => {
  //     console.log('error is: ', error);
  //     res.sendStatus(500);
  //   })


});





/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const user_id = req.body.userId
});

module.exports = router;
