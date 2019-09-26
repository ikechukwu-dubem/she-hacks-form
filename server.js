const express = require("express"); //import express
const app = express(); //create an express app
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});



//creat a default route(404)(7)
app.use("*", (req, res) => {
    res.status(404).send("<h1>404, page not found</h1>");
});

//form password
app.post("/login", (req, res) => {
    //  console.log(req.body);
    //res.send(`Username is ${ req.body.username} and password is ${req.body.password}`);
});
// login route
//router.post("/login", (req, res)=>{
if (req.body.username === 'ike' && req.body.password === 'xty') {
    res.send('login sucessfull')
} else {
    res.send('password or username incorrect')
}
console.log(req.body)
res.send(`Username is ${req.body.username} and password is ${req.body.password}`);
});

//a route for details(4)
app.get("/details", (req, res) => {
    console.log(req.query);
    res.send(
        `hi ${req.query.fullname} your <strong>${req.query.subject}</strong> form has been submited`
    ); // string interpulation
    // res.sendfile(_dirname + "/index.html")
});
app.listen(3000, () => console.log("server running at port 3000")); // expose the app on port 3000


