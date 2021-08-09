const express = require("express");
const app = express();
const port = 8000;
app.get("/login", (req, res) => {
    return res.send("Hello there");
});
app.get("/signup", (req, res) => {
    return res.send("you are signed in");
});

const admin = (req, res) => {
    return res.send("This is admin");
};
const isAdmin = (req, res, next) => {
    console.log("isAdmin is running");
    next();
};
const isloggedIn = (req, res, next) => {
    console.log("isloggedIn");
    next();
}
app.get("/admin", isloggedIn, isAdmin, admin);
app.listen(port, () => {
    console.log("Server is up and running... ");
});