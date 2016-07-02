// Dependencies
var route = require('koa-route');

// Route definitions
module.exports = function router(app)
{
  // Set PERSON routes
  app.use(route.get('/', require('./routes/person/list')));
  app.use(route.get('/person/new', require('./routes/person/add')));
  app.use(route.get('/person/:id', require('./routes/person/show')));
  app.use(route.get('/person/delete/:id', require('./routes/person/remove')));
  app.use(route.get('/person/edit/:id', require('./routes/person/edit')));
  app.use(route.post('/person/create', require('./routes/person/create')));
  app.use(route.post('/person/update', require('./routes/person/update')));

  // Set CANDIDATE routes
  app.use(route.get('/candidate', require('./routes/candidate/list')));
  app.use(route.get('/candidate/new', require('./routes/candidate/add')));
  app.use(route.get('/candidate/:id', require('./routes/candidate/show')));
  app.use(route.get('/candidate/delete/:id', require('./routes/candidate/remove')));
  app.use(route.get('/candidate/edit/:id', require('./routes/candidate/edit')));
  app.use(route.post('/candidate/create', require('./routes/candidate/create')));
  app.use(route.post('/candidate/update', require('./routes/candidate/update')));

  // Set VOTER routes
  app.use(route.get('/voter', require('./routes/voter/list')));
  app.use(route.get('/voter/new', require('./routes/voter/add')));
  app.use(route.get('/voter/:id', require('./routes/voter/show')));
  app.use(route.get('/voter/delete/:id', require('./routes/voter/remove')));
  app.use(route.get('/voter/edit/:id', require('./routes/voter/edit')));
  app.use(route.post('/voter/create', require('./routes/voter/create')));
  app.use(route.post('/voter/update', require('./routes/voter/update')));
};
