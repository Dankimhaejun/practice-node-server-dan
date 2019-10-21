const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.send('이거는 서버야 알지?')
})
app.listen(5000, () => {
  console.log('server on 5000');
})