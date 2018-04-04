const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/users");
const keys = require("./keys");
let google_client = keys.google.clientID;
let google_secret = keys.google.clientSecret;
let url = "http://localhost:3001/api/auth/google/redirect";
// user info that gets put into the cookie, takes in current/new user
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// when the cookie comes back from the browser find the user with that id
// then pass on the user
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: google_client,
      clientSecret: google_secret,
      // this has to match callback in google project settings as well
      callbackURL: url
    },
    (accessToken, refreshToken, profile, done) => {
      // check if user already existsc
      // console.log(User);
      console.log(profile.id);

      User.findOne({
        where: {
          googleId: profile.id
        }
      }).then(currentUser => {
        if (currentUser) {
          // already exists
          console.log("user exists: " + currentUser);
          // pass in current user to be serialized in the serliazeUser func
          done(null, currentUser);
        } else {
          // if not add new user
          // makes new user and saves it to our database
          let user = new User();
          user.username = profile.displayName;
          user.googleId = profile.id;
          user
            .save(err => {
              if (err) {
                console.log(err);
              }
            })
            .then(newUser => {
              console.log("new user created " + newUser);
              done(null, newUser);
            });
          // new db.User({
          //   username: profile.displayName,
          //   googleId: profile.id
          // })
          //   .save()
          //   .then(newUser => {
          //     console.log("new user created: " + newUser);
          //     done(null, newUser);
          //   });
        }
      });
    }
  )
);
