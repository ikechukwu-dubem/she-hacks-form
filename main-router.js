const express = require("express"); //import express
const router = express.Router(); 

//a route for color(2)
router.get("/colors", (req, res) => {
    res.send(["red", "blue", "yellow", "pink"]);
});

//a route for fruits(3)
router.get("/fruits", (req, res) => {
    res.send(["apple", "banana", "mango", "watermelon", "plantain"]);
});



