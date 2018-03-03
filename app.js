//require modules
const path = require('path');
const express = require('express');
const session = require('express-session');
const app  = express();
const passport = require('passport');
//require custom modules
const indexRoutes = require('./routes/index.routes');
const auth = require('./auth/flickrAuth.js');
//for showing static frontend files
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(express.static(path.join(__dirname,'public')));
app.get('/auth/provider', passport.authenticate('flickr'));
app.get('/auth/provider/callback',
  passport.authenticate('flickr', { successRedirect: '/',
                                      failureRedirect: '/' }));
//middleware for catching /,/auth routes
app.use('/',indexRoutes);
//listening on port 3000 (locally) or process.env.PORT;
const PORT = 3000 || process.env.PORT;
app.listen(process.env.PORT || 3000,()=>{
  console.log(`Server Started on PORT : ${PORT}`);
});
