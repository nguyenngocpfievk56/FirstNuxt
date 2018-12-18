const { Nuxt, Builder } = require('nuxt');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = require('express')();

// Body parser, to access `req.body`
app.use(bodyParser.json());

// Sessions to create `req.session`
app.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}));

var auth = require('./routes/auth');
app.use('/api/auth', auth);

var entry = require('./routes/entry');
app.use('/api/entry', entry);

var modules = require('./routes/module');
app.use('/api/module', modules);

var user = require('./routes/user');
app.use('/api/user', user);

const isProd = process.env.NODE_ENV === 'production';
let config = require('../nuxt.config.js');
config.dev = !isProd;
const nuxt = new Nuxt(config);

if (!isProd) {
  const builder = new Builder(nuxt);
  builder.build();
}
app.use(nuxt.render);
app.listen(3000);
console.log('Server is listening on http://localhost:3000');