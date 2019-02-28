const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./utils/path');
const userRoutes = require('./routes/users');
const mainRoutes = require('./routes/main');

const app = express();

app.set('view-engine', 'pug');

app.use(express.static(path.join(rootDir, 'public')));

app.get('/users', userRoutes);
app.get('/', mainRoutes);

app.use('/', (req, res, next) => {
  res.render(path.join(rootDir, 'views', '404.pug'))
})

app.listen(3600, () => {
  console.log('Listening on port 3600')
})