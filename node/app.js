var app = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient,
var path = require('path');
var port = process.env.PORT || 5000;
var login=require('./login');
url = '0.0.0.0';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true, }));
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req ,res) => {
    res.send('serving backend at host => '+host+' port => '+port);
})

app.post('/login', (req, res) => {
    login.checkLogin(req, res);
})

const server = app.listen(port, url, error => {
    if(error) throw error;
    else {
        console.log('Running at \n'+server.address().address + '\t' +server.address().port);
        
    }
})

