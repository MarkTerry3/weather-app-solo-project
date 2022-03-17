const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');


router.put('/', (req, res) => {
    const userId = req.body.user_id.id;
    const newZipCode = req.body.zipCode;
    console.log('user and newZip :', userId, newZipCode);
    const queryText = `UPDATE "user"
    SET "zip_code" = $1
    WHERE "id" = $2;`;
    pool.query(queryText, [newZipCode, userId])
    .then(() => res.sendStatus(201))
    .catch((err) => {
        console.log('failed updating Zip Code', err);
        res.sendStatus(500);
    })

})




module.exports = router;