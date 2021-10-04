const express = require('express');
const pool = require('../connection/connection');

const router = express.Router();

router.get('/', (req, res) => {
  
  //const { cart } = req.body;

  //req.session.cartId = cartId;
  req.session.token = [...Array(400)].map(i=>(~~(Math.random()*36)).toString(36)).join('');
    
  const data = {
    //cart: req.session.cart,
    token: req.session.token
  } 
  
  res.send(data);
});

// PG Get with id Method
router.post('/login', (req, res) => {
  try{
    const { email, password } = req.body;
 
    if (email && password) {
      pool.query(
        `SELECT COUNT(*) as count FROM users WHERE email = '${email}' AND password = '${password}'`, 
        (error, results) => {
          console.log(results[0]['count']);
          if (results[0]['count'] > 0) {
            req.session.user = email;
            req.session.token = [...Array(400)].map(i=>(~~(Math.random()*36)).toString(36)).join('');
            const data = {
              user: req.session.user,
              token: req.session.token
            } 
            res.send(data);
          } else {
            res.send('Invalid email or password.');
          }
        }
      );
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
});

router.post('/logout', (req, res) => {
  req.session = null;
  res.send("You have successfully logged out");
});

module.exports = router;
