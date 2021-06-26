const express = require('express');
const router = express.Router();
const pool = require('../connection/connection');

/* GET method */
router.get('/', (req, res) => {
  try{
    pool.query('SELECT * FROM users', (error, results, fields) => {
      if (error) {
        res.send(error);
      }
      res.send(results);
    });
  } catch (error) {
    if (error) console.error(`Error: ${error.message}`);
  }
});

/* Specific GET method */
router.get('/:id', (req, res) => {
  try {
    pool.query(`SELECT * FROM users WHERE id=${req.params.id}`,
      (error, results) => {
        res.send(results);
      }
    );
  } catch (error) {
    console.error(`Error ${error}`);
  }
});

/* POST method */
router.post('/', (req, res) => {
  try {
    pool.query(
      `INSERT INTO users (creationDate, firstName, lastName, email, password, dateOfBirth, lookingJobAt) 
      VALUES ('${req.body.creationDate}',
    '${req.body.firstName}',
    '${req.body.lastName}',
    '${req.body.email}',
    '${req.body.password}',
    '${req.body.dateOfBirth}',
    '${req.body.lookingJobAt}')`,
      () => {
        res.send('Posted successfully.');
      }
    );
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

/* PUT method */
router.put('/:id', (req, res) => {
  try {
    pool.query(`UPDATE users SET
    creationDate='${req.body.creationDate}',
    firstName='${req.body.firstName}',
    lastName='${req.body.lastName}',
    email='${req.body.email}',
    password='${req.body.password}',
    country='${req.body.country}',
    language='${req.body.language}',
    dateOfBirth='${req.body.dateOfBirth}',
    profession='${req.body.profession}',
    lookingJobAt='${req.body.lookingJobAt}',
    gender='${req.body.gender}'
    WHERE id=${req.params.id}
    `,
      () => {
        res.send('Updated entry.');
        //pool.end();
      }
    );
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

/* DELETE method */
router.delete('/:id', (req, res) => {
  try {
    pool.query(`DELETE FROM users WHERE id=${req.params.id}`, () => {
      res.send('Deleted entry.');
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
});

module.exports = router;