const express = require("express");
const app = express();

app.use(require("./usuario"));
app.use(require("./login"));
app.use(require("./curso"));
app.use(require("./propiedad"));

module.exports = app;
