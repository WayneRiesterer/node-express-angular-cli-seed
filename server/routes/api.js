const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`API says G'day from Rockingham, Western Australia :)`);
});

module.exports = router;
