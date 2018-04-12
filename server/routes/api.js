const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`API says G'day :)`);
});

module.exports = router;
