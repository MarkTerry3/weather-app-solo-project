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
  // axios.get(`http://dataservice.accuweather.com/currentconditions/v1/23977_PC?apikey=${process.env.ACCU_API_KEY}`)
  //   .then((conditionsResponse) => {
  //     axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/23977_PC?apikey=${process.env.ACCU_API_KEY}`)
  //       .then((fiveDayResponse) => {
  //         let weatherResponse = {}
  //         weatherResponse.conditions = conditionsResponse.data;
  //         weatherResponse.fiveDay = fiveDayResponse.data;
  //         res.send(weatherResponse);
  //       })
  //   })



  const user_id = req.user.id
  const queryText = `SELECT "zip_code"
  FROM "user"
  WHERE "id" = $1;`;
  pool.query(queryText, [user_id])
    .then((result) => {
      const userZip = result.rows[0].zip_code;
      axios.get(`http://dataservice.accuweather.com//locations/v1/postalcodes/search?apikey=${process.env.ACCU_API_KEY}&q=${userZip}`)
        .then((zipCodeResponse) => {
          const userLocationKey = zipCodeResponse.data[0].Key;
          axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${userLocationKey}?apikey=${process.env.ACCU_API_KEY}`)
            .then((conditionsResponse) => {
              axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${userLocationKey}?apikey=${process.env.ACCU_API_KEY}`)
                .then((fiveDayResponse) => {
                  let weatherResponse = {}
                  weatherResponse.conditions = conditionsResponse.data;
                  weatherResponse.fiveDay = fiveDayResponse.data;
                  res.send(weatherResponse);
                })
            }).catch((error) => {
              console.log('error getting current conditions', error);
            })
        }).catch((error) => {
          console.log('error getting zip code', error);
        })
    }).catch((error) => {
      console.log('problem grabbing zipcode from database', error);
    })
});




// Current conditions - gives temperature and weather text
//   `http://dataservice.accuweather.com/currentconditions/v1/${userLocationKey}?apikey=${process.env.ACCU_API_KEY}`

// 5 day forecast - gives you a 5 day forecast
//   `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${userLocationKey}?apikey=${process.env.ACCU_API_KEY}`

// Zip Code Search to get location key
//  `http://dataservice.accuweather.com//locations/v1/postalcodes/search?apikey=QhA9AaAIPHRajt8qDUyztjyMrrtednIR&q=55106
//  `http://dataservice.accuweather.com//locations/v1/postalcodes/search?apikey=${process.env.ACCU_API_KEY}&q=${userZip}`









/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const user_id = req.body.userId
});

module.exports = router;
