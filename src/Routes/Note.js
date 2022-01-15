
//importing the express library to work in this file
const express = require('express');
//making router to use it in this file
const router = express.Router();
//importing the note file in this file
const Note = require('./../Models/note');

//making the list
router.post('/list', async function(req, res) {

    var notes = await Note.find({
        id: req.body.id
    })
    res.json(notes);
})

//adding the data to the dataabse
router.post('/add', async function(req, res) {

    //dleteone function is used to delete the data from the databse if it exist
    //and then after deleting that we are making the new node of the same data given 
    //below here we are checking if the id matches with the id present in the database
    //then we are going to delete it and create new node

    await Note.deleteOne({
            id : req.body.id
        });

    //making the new id
    const new_id = new Note({
            id : req.body.id,
            email : req.body.email,
            title : req.body.title,
            content : req.body.content,
        })
    
    //use to send the data to the database
    await new_id.save();

    //used to send a simple message on screen 
    res.send("Node Created See it")
})


//route to delte any node from the databse 
router.post('/delete', async function(req, res) {
    await Note.deleteOne({id: req.body.id})
    
    res.send("Note deleted")
})



//making for the notes route
router.get('/',  function(req, res) {
    res.send("This is the notes page");
})


//exporting my router to use it in the another file
module.exports = router;