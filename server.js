const express = require ('express');
const port = process.env.PORT || 4000; //port
const cors = require('cors');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

app.use(cors());

app.get('/db', function (req, res) {
    MongoClient.connect('mongodb+srv://alexandra:ilIubescPeTeo@cluster0.wkkgp6t.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("Projects");
        dbo.collection("schoolProjects").find({}, { projection: { _id: 0, project_link: 1 } }).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
});


app.get('/', function (req, res) {
    res.send('POST request to the homepage');
  });

app.listen(port, ()=>{
    console.log('Server started');
});

