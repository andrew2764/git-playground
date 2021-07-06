import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('qqq');
});

app.get('/about', (req, res) => {
  res.send('about');
});

const port = 3000;
app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
