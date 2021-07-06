import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.send('home');
});

const port = 3000;
app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
