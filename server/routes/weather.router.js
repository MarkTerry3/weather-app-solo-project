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

  // this query text is making things not work, how do i make it so this doesnt send back to the client side? ////////////////////////////////////////////////////////////////
  // console.log(req.user.id);
  // let userId = req.user.id;
  // let queryText = `SELECT "location_key"
  // FROM "user"
  // WHERE "id" = $1;`
  // pool.query(queryText, [userId])
  //   .then((result) => {
  //     res.send(result.rows);
  //   }).catch((error) => {
  //     res.sendStatus(500);
  //   })

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


// // updating user Zip Code
//  router.put('/:id', (req, res) => {
//   let params = req.params.id;
//   let req_user = req.user.id;
//   console.log('req,params and req.user :', params, req_user);
//   console.log('hello');
//   let queryText = `SELECT * FROM "user";`;
//   pool
//   .query(queryText, [params, req_user])
//   .then(() => res.sendStatus(201))
//   .catch((err) => {
//       console.log('Item delete failed: ', err);
//       res.sendStatus(500);
//   });
   
//   // queryText = `UPDATE "user"
//   // SET "zip_code" = $1
//   // WHERE "id" = $2;` 
//   // endpoint functionality
// });





/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const user_id = req.body.userId
});

module.exports = router;
