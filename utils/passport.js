const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;


const GOOGLE_CLIENT_ID = "";
const GOOGLE_CLIENT_SECRET = "";


const GITHUB_CLIENT_ID = "";
const GITHUB_CLIENT_SECRET = "";

const FACEBOOK_CLIENT_ID = "";
const FACEBOOK_CLIENT_SECRET = "";


passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: "/auth/facebook/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},

    //It is going to give us accessToke , refreshToken , profile and an callback function.
    function (accessToken, refreshToken, profile, done) {

        // console.log(profile);

        //    Database configuration
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //     return cb(err, user);
        // });

        /*
        if you are using the mongodb

        cons user={
        username:profile.displayName,
        avatar:profile.photos[0]
        }

        user.save();
        */

        done(null, profile);
    }
));

/*serializeUser() is setting id as cookie in user's browser and passport. deserializeUser() is getting id from the cookie, which is then used in callback to get user info or something else, based on that id or some other piece of information from the cookie */

passport.serializeUser((user, done) => {
    done(null, user);
})


passport.deserializeUser((user, done) => {
    done(null, user);
})



