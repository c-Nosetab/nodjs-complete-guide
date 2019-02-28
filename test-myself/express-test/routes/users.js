const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');
const router = express.Router();

router.get('/users', (req, res, next) => {
  res.render(path.join(rootDir, 'views', 'users.pug'))
})

module.exports = router;