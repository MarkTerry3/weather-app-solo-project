const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */


let apiOne = 0;
let apiTwo = 0;
let apiThree = 0;
let apiFour = 0;
let API_KEY;

router.get('/', rejectUnauthenticated, (req, res) => {
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

// trying to get it to use a different api key every 50 GETs
// function whichApiKey() {
//   if (apiOne < 49) {
//     API_KEY = ${process.env.YAHOO_ACCU_API_KEY};
//     return;
//   } if (apiTwo < 49) {
//     API_KEY = ${process.env.MATT_ACCU_API_KEY};
//     return;
//   } if (apiThree < 49) {
//     API_KEY = ${process.env.AOL_ACCU_API_KEY};
//     return;
//   } if (apiFour < 49) {
//     API_KEY = ${process.env.GMAIL_API};
//     return;
//   }
// }


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
          const userCity = zipCodeResponse.data[0].LocalizedName;
          // const userLatitude = zipCodeResponse.data[0].GeoPosition.Latitude
          // const userLongitude = zipCodeResponse.data[0].GeoPosition.Longitude
          axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${userLocationKey}?apikey=${process.env.ACCU_API_KEY}&details=true`)
            .then((conditionsResponse) => {
              axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${userLocationKey}?apikey=${process.env.ACCU_API_KEY}`)
                .then((fiveDayResponse) => {
                  axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${userLocationKey}?apikey=${process.env.ACCU_API_KEY}`)
                    .then((hourlyResponse) => {
                      let weatherResponse = {}
                      weatherResponse.conditions = conditionsResponse.data;
                      weatherResponse.fiveDay = fiveDayResponse.data;
                      weatherResponse.userInfo = zipCodeResponse.data[0].LocalizedName;
                      weatherResponse.hourly = hourlyResponse.data;
                      apiOne ++;
                      console.log(apiOne);
                      res.send(weatherResponse);
                    })
                }).catch((error) => {
                  console.log('error getting 12 hour forecast');
                })
            }).catch((error) => {
              console.log('error getting current conditions');
            })
        }).catch((error) => {
          console.log('error getting zip code');
        })
    }).catch((error) => {
      console.log('problem grabbing zipcode from database');
    })
});



// GET to hourly forecast
// /forecasts/v1/hourly/12hour/23977_PC?apikey=3PH0Gj42GXqiPgI6T9IivsaAVsK5kczR





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
