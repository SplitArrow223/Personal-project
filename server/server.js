require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authCtrl = require('./authCtrl');
const roundCtrl = require('./RoundCtrl')

const {SERVER_PORT, SECRET, CONNECTION_STRING} = process.env;

const app = express();
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => {console.log('listen linda', SERVER_PORT)})
})
app.use( express.static( `${__dirname}/../build` ) );
app.use(express.json())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized:false
}))

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/user-data', authCtrl.userData)
app.get('/logout', authCtrl.logout)

app.post('/courses/rounds', roundCtrl.create);
app.get('/courses/rounds/:course_id', roundCtrl.roundsData);
app.put('/courses/rounds/:id/:course_id', roundCtrl.edit);
app.delete('/courses/rounds/:id/:course_id', roundCtrl.delete);
app.get('/courses', roundCtrl.getCourses);
app.get('/courses/rounds', roundCtrl.getHandicap)