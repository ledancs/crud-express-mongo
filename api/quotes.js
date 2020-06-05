let db;
let quotesCollection;

exports.setDatabase = (_db) => {
    db = _db;
};

exports.setCollection = (collection) => {
    quotesCollection = collection;
};

exports.get = (req, res) => {
    db.collection('quotes')
        .find()
        .toArray()
        .then((results) => {
            console.log(results);
            // res.send('Hello World');
            // res.sendFile(__dirname + '/index.html')
            res.render('test', { quotes: results });
        })
        .catch((error) => { console.error(error); });

    // Note: __dirname is directory current directory you're in. Try logging it and see what you get!
    // /home/land/Documents/programming/node/crud-espress-mongo
    // console.log(__dirname);
};

exports.post = (req, res) => {
    // console.log(req.body);
    quotesCollection.insertOne(req.body)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => { console.error(error); })
    .finally(() => {
        res.redirect('/');
    });
};

exports.put = (req, res) => {
    quotesCollection.findOneAndUpdate(
        { 
            name: 'Yoda' 
        },
        {
            $set: {
                name: req.body.name,
                quote: req.body.quote
            }
        },
        {
            upsert: true
        }
    )
    .then((result) => {
        // console.log(result);
        res.json('Success');
    })
    .catch((error) => { console.error(error); });
};