const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index/welcome');
});

// Dashboard route
router.get('/dashboard', (req, res) => {
  res.send('Dashboard');
});

module.exports = router;