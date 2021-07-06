import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('qqq');
});

app.get('/about', (req, res) => {
  res.send('<h3>about</h3>');
});

const port = 3000;
app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
