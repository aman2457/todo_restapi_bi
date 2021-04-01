const Mongoose = require('mongoose');


const TaskSchema = Mongoose.Schema({
    TaskName: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Creator: {
        type: String,
        required: true
    },
    Duration: {
        type: String,
        required: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now()
    }
});


module.exports = Mongoose.model('TASK', TaskSchema);