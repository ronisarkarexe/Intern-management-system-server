const express = require("express");
const cors = require("cors");
const app = express();
const router = require('./router/index')

//required middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.use('/api/v1', router)

module.exports = app;
