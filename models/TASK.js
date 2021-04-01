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
        type: Number,
        required: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now()
    },
    expire_at: {
        type: Date,
        default: Date.now,
        expires: Duration * 60
    }
});


module.exports = Mongoose.model('TASK', TaskSchema);


//Now handover to you
// I guess, it shuld work. CHekc again. bu take care of number value in passing context