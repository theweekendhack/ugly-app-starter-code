
//import express
const express = require("express");
const exphbs  = require('express-handlebars');
const roomModel = require("./models/rooms.js");

//create the app object
const app = express();


app.use(express.static("public"))

//This tells the app that you are using handlebars as your template enginge
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//routes 
app.get("/",(req,res)=>{

    res.render("index",{
        title : "Home | Ugly Airbnb App",
        rooms : roomModel.getTopRooms()
    });
});


app.get("/contact-us",(req,res)=>{

    res.render("contactUs",{
        title : "Conctact Us | Ugly Airbnb App"
    });
})


app.get("/room-listing",(req,res)=>{
    res.render("roomList",{

        
        title : "Room Listing | Ugly Airbnb App",
        rooms : roomModel.getAllRooms()
    });
});


app.post("/contact-us",(req,res)=>{
    res.render("");
})



//set up and web server
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`The Web Server is up and up and up and up!!`);
})