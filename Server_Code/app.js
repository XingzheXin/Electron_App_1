const express = require('express');
const bodyParser = require('body-parser');
const app= express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

app.post('/', function(req, res){
    res.setHeader("Content-Type", "applicatoin/json; charset=utf-8");
    //res.send('POST request sent to the homepage');
    console.log("Got post request");

    let body='';
    req.on('data', chunck => {
        body += chunck.toString(); //Convert buffer to string
    });

    console.log(body);
    res.send(body);
    req.on('end', () => {
        console.log(body);
        res.end('ok');
    })
})
