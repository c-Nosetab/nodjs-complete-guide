const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const rootDir = require('./util/path');
const app = express();

app.set('view engine', 'pug');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render(path.join(rootDir, 'views', '404.pug'))
})

app.listen(3500, () => {
  console.log(`Listening on port 3500`)
})
