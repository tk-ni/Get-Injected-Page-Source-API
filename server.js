const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const mainRouter = require('./routes/main.route');

app.use('/', mainRouter);

app.listen(process.env.PORT || 3201, ()=>{
    console.log('Server listening to', process.env.PORT || 3201);
})