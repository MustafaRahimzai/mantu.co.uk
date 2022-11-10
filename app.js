const express = require('express');
const app = express();
const path = require('path');
const expressLayout = require('express-ejs-layouts');

const indexRouter = require('./routes/index');

app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');
app.set('layout', './layout/mainlayout');

//do not used
//app.set('layout contact', false);

app.use(express.static(path.join(__dirname , 'public')));
app.use(expressLayout);

//do not used
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());


app.use('/', indexRouter);

app.listen(process.env.PORT || 3000 , ()=>{
    console.log("Working ✔");
});

module.exports = app;