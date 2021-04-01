const express = require('express');
const router = express.Router();
const Task = require('../models/TASK')



router.get('/', (req, res) => {
    res.send('Welcome to Backend');
});


// Add a task in the task lit
router.post('/add', async (req, res) => {

    // to debug
    console.log(req.body);

    // create object of Post model
    const task = new Task({
        TaskName: req.body.TaskName,
        Description: req.body.Description,
        Creator: req.body.Creator,
        Duration: req.body.Duration
    });

    // save to database
    try {

        const savedTask = await task.save();
        res.status(200).json(savedTask);
    } catch (e) {
        res.status(400).json({
            errorMessage: e
        });
    }

});



// retrieve the list of all stored posts

router.get('/list', async (req, res) => {
    // to debug the url
    // res.send('List of all task in my todo');
    try {
        // get all the task
        const taskList = await Task.find();
        // returns all data by default without any limit or filter no any functions ahead

        res.status(200).json(taskList);
        // if success return retrieved list with OK message: 200
    } catch (e) {
        res.status(400).json({
            errorMessage: e
        });
        // if any 
    }
})


module.exports = router;