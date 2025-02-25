const express = require('express');

const app = express();
const bodyParser = require('body-paerser');


const app = express();
app.use(bodyParser.json());

const database = {
	users: [
		{
			id: '123',
			name: 'John',
			email: 'john@gmail.com'
			password: 'cookies',
			entries: 0, 
			joined: new Date()
		},
		{
			id: '124',
			name: 'Sally',
			email: 'sally@gmail.com'
			password: 'bananas',
			entries: 0, 
			joined: new Date()
		}
	] 
}

app.get('/', (req, res) => {
	res.send(database.users);
})

app.post('/signin', (req, res) => {
	if (req.body.email === database.users[0].email 
		&& req.body.password ===database.users[0].password) {
		res.json('sucess');
	} else {
		res.status(400).json('error logging in');
	}
})

app.post('/register', (req, res) => {
	const { email, name, password } = req.body;
database.users.push({
	id: '125',
			name: name,
			email: email,
			password: password,
			entries: 0, 
			joined: new Date()
})
res.json(database.users[database.users.lenght-1]);
})

app.listen(3000, ()=> {
	console.log('App is running on port 3000');
})

/* 
/ Svarar: This is working
/signin så att man kan logga in --> POST (För att skydda lösenord)
/register --> POST --> Användare
/profile/userID --> GET --> Användare
/image --> PUT --> Användare
*/