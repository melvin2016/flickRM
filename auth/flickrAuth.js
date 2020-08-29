const passport = require("passport"),
  oauthFlickr = require("passport-oauth").OAuthStrategy;

passport.use(
  "flickr",
  new oauthFlickr({
    requestTokenURL: "https://www.flickr.com/services/oauth/request_token",
    accessTokenURL: "https://www.flickr.com/services/oauth/access_token",
    userAuthorizationURL: "https://www.flickr.com/services/oauth/authorize",
    consumerKey: process.env.clientKey,
    consumerSecret: process.env.clientSecret,
    callbackURL: "/auth/provider/callback",
  }, (token, tokenSecret, profile, done) => {
    console.log(token);
    done();
  }),
);
