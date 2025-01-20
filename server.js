﻿const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/email', require('./emailing/email.controller'));
// app.use('/users', require('./users/user.controller'));
// app.use('/data', require('./datalogic/data.controller'));
// app.use('/taskval', require('./Taskvals/taskVal.controller'));
// app.use('/tasknote', require('./TaskNotes/taskNote.controller'));
// app.use('/wximgs', require('./wximgs/wximgs.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
