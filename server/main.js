var express = require('express');

var app = express();

var port = 3000;

app.use(express.static(__dirname + '/../client'));

app.get('/files', function(req, res) {
	files = []
	files.push({ name: 'file1', content: 'contentcontent', length: 123 });
	files.push({ name: 'file2', content: 'contentcontent', length: 223 });
	files.push({ name: 'file3', content: 'contentcontent', length: 323 });
	res.end(JSON.stringify(files));
});

app.listen(port, function() {
	console.log("Listening to http://localhost:" + port + "/");
});
