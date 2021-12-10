const express = require('express');
const path = require('path')
const app = express();
const port = 3001;
app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/', express.static(__dirname + '/node_modules/'));
app.get('/', function (req, res) {
    res.sendFile('index.html')
} )

app.listen(port, () => console.log('mount in http://localhost:3001'))


