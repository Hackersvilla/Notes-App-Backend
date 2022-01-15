

//creating models for the note
//1. Schema - Means information or the data which
//will be there in models simple 
//2. create model - <modelName><schema>


//mongoose import
const mongoose = require("mongoose");

//making my schema
const Noteschema  = mongoose.Schema({
    //making the fields for a notes in a database

    //for id
    id : {
        type : String,
        unique : true,
        required : true,
    },
    //for email
    email : {
        type : String,
        required : true
    },
    //for title
    title : {
        type : String,
        required : true
    },
    //for content
    content : {
        type : String
    },
    //for dateAdded
    dateadded : {
        type : Date,
        default: Date.now
    }

});


//making my model for the schema
//last step
//to us this model in another files we use export command to do it here

module.exports = mongoose.model("Note" , Noteschema);