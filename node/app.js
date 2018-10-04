const app = require('express')(),
    mongo = require('mongodb').MongoClient,
    path = require('path'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 5000,
    host = '0.0.0.0';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended:true,
}));
app.use((req,res,next)=>{
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});

app.get('/', (req, res) => {
    res.send('serving backend at host => '+host+' port => '+port);
});

app.post('/login', (req, res) => {
    res.send({
        'Success':'Y',
        'message':null,
        'result':[]
    });
});

const server = app.listen(port, host, e => {
    if(e)
        throw e;
    else {
        console.warn('Serving REST at \n\thost => '+server.address().address+' \t port => '+server.address().port);
    }
});