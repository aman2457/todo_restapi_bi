require('dotenv/config')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const cors = require('cors')
const bodyParser = require('body-parser')
const TaskRouter = require('./routes/tasks')

app.use(cors())
app.use(bodyParser.json())
app.use('/', TaskRouter)

// connection of database
mongoose.connect(
    process.env.DB_URL, {
        useNewUrlParser: true
    }, () => console.log('Hurray, connected to DB!'));
// connected successfully






// default

app.get('/', (req, res) => {
    res.send('Welcome to Home');
});




app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
});