const express = require('express');
const router = express.Router();
const { content } = require('../models/index');
router.get('/', (req, res) => {
  res.send(content);
});
module.exports = router;