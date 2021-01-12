const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const mainRouter = require('./routes/main.route');

app.use('/', mainRouter);

app.listen(process.env.PORT || 3201, ()=>{
    console.log('Server listening to', process.env.PORT || 3201);
})