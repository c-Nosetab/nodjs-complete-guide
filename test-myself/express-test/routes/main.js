const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../utils/path');

router.get('/', (req, res, next) => {
  res.render(path.join(rootDir, 'views', 'home.pug'))
})

module.exports = router;