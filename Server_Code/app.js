const express = require('express');
const app = express();
//const unidecode = require('unidecode');

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

app.post('/', function(req, res){
    //res.setHeader("Content-Type", "applicatoin/json; charset=utf-8");
    //res.send('POST request sent to the homepage');
    console.log("Got post request");
	console.log(req.body);
	console.log("WTF");
	var content = "Hello 世界";
	
	res.charset = 'utf-8';
	res.contentType('text');
	res.send(content);
	
    //console.log(unidecode(body));
    //req.on('end', () => {
    //    console.log(body);
    //    res.end('ok');
    //})
})
