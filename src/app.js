
//importing the library and assing it to const vairbale 
const express = require("express");


//now sign the whole express in a cons variable
const app = express();


//for connecting the mongodb database we use mongoose
const mongoose = require("mongoose");

//for connecting body parser
const bodyParser = require("body-parser");

//using the body parser in the whole app and making exentds means nested result are
//not given 
app.use(bodyParser.urlencoded({extends: false}))
//conveting the body to json format and making to use the whole app
app.use(bodyParser.json());

//importing the model we have created for our notes app
// ./ - represents for the src folder
const Note = require("./Models/note.js");


//connecting the database with dataabse string 
mongoose.connect("mongodb+srv://Harvinder:8077385872@cluster0.peuae.mongodb.net/notesdb").then(function() {
   
    //making the home page result
    app.get('/', function(req, res) {
        //sending the request to the user or
        //showing the result when user enter the website
        const response = {statuscode: res.statusCode,message: "Api Works"}
        res.json(response);
    });


    //using the router made in the next file here
    const noteRouter = require("./Routes/Note");
    //making the app to use this router as main 
    app.use('/notes' , noteRouter);
   

});

//making a variable to store the port value for the app
const PORT = process.env.PORT || 5000
//for making the app run on the port 5000 or your choice
app.listen(PORT , function () {
    console.log("Port Started at : " + PORT);
});