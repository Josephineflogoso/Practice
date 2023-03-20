const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async (req, res) => {
	res.send('Hello there!');
});

// Add a new route that returns the desired JSON data
app.get('/show', async (req, res) => {
  const data = [
    { achievement: 'BackEnd What?' },
    { sayGreeting: 'Hello From StackTrek' }
  ];
  res.json(data);
});

// Add a new route that returns the value of the "achievement" key
app.get('/achievement', async (req, res) => {
  const data = [
    { achievement: 'BackEnd What?' },
    { sayGreeting: 'Hello From StackTrek' }
  ];
  res.send(data[0].achievement);
});

// Add a new route that returns the value of the "sayGreeting" key
app.get('/greet', async (req, res) => {
  const data = [
    { achievement: 'BackEnd What?' },
    { sayGreeting: 'Hello From StackTrek' }
  ];
  res.send(data[1].sayGreeting);
});

app.listen(3001, () => {
	console.log('Server listening on port 3001');
});

