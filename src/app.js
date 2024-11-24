const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/tasks', taskRoutes);
app.use(errorHandler);

module.exports = app;
