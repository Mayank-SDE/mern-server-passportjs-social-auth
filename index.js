const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./utils/passport");
const authRoute = require("./routes/authRoutes");


const app = express();

app.use(cookieSession({
    name: "session",
    keys: ["lama"],
    maxAge: 24 * 60 * 60 * 100
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:5173",
    methods: 'GET,POST,PUT,PATCH,DELETE',
    credentials: true
}));

app.use("/auth", authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on the PORT ${PORT}`);
})