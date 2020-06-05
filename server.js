const express = require('express'),
    bodyParser= require('body-parser'),
    MongoClient = require('mongodb').MongoClient,
    exphbs  = require('express-handlebars');

const api = {
    quotes: require('./api/quotes.js')
};

// mongodb user: dev
// mongodb pass: dev123
const { connStr } = require('./config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const setAppApi = (db) => {
    api.quotes.setDatabase(db);
    api.quotes.setCollection(db.collection('quotes'));
    app.get('/', api.quotes.get);
    app.post('/quotes', api.quotes.post);
    app.put('/quotes', api.quotes.put);
};

MongoClient.connect(connStr, { useUnifiedTopology: true })
    .then((client) => {
        console.log('connected to remote mongodb');
        return client.db('star-wars-quotes');
    })
    .then(setAppApi)
    .catch(error => console.error(error));

const port = 3000;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
