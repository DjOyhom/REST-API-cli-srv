const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/rest', (req, res) => {
    res.send("req");
    console.log(req);
});

app.get('/rest', (req, res) => {
    const sortBy = req.query.sortBy;
    res.send("req");
    console.log(req);
});

app.get('/rest/:id', (req, res) => {
  const resourceId = req.params.id;
  res.send(resourceId);
  console.log(req);
});

app.put('/rest/:id', (req, res) => {
    const resourceId = req.params.id;
    res.send(resourceId);
    console.log(req);
});

app.delete('/rest/:id', (req, res) => {
    const resourceId = req.params.id;
    res.send(resourceId);
    console.log(req);
});

// Listen on port 4000
app.listen(4000, () => console.log('Listening…'));

// Reading the port from an environment variable
const port = process.env.PORT || 5000;
app.listen(port);
