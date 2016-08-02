const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;


const app =express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());


app.get('/', (req, res)=>{
    db.collection('forsale').find().toArray(function(err, result) {
        if(err)return console.log(err);
        res.render('index.ejs', {quotes: result});
  
})
    
    //res.sendFile(__dirname+'/index.html');
    
});
app.post('/forsale', (req, res) => {
   db.collection('forsale').save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to database');
    res.redirect('/');
  });
});





MongoClient.connect('mongodb://dasa:1234@ds029715.mlab.com:29715/forsale', (err, database) => {
    if(err) return console.log(err);
    db=database;
    
app.listen(3000, ()=> {
  console.log('listening on 3000');
});
    
  
});