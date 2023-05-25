const express = require('express');
const bp = require('body-parser');

const routes = require('./controllers/routes');

const app = express();


app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000);
console.log("App is listening on port 3000")