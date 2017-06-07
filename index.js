const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

massive({
    host: 'localhost',
    port: '5432',
    database: 'sql_massive_node'
}).then(function(db) {
    app.set('db', db);
    console.log('Is this on?');
});

const controller = require('./products_ctrl');

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.post('/product', controller.create);
app.get('/product/:productId', controller.getOne);
app.get('/products', controller.getAll);
app.put('/product/:productId', controller.update);
app.delete('/product/:productId', controller.delete);

app.listen(port, function() {
    console.log('Listening on port', port)
})