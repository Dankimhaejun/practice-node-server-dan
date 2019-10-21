const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('이거는 서버야 알지?');
});

app.listen(5001, () => {
  console.log('server on 5001');
});
