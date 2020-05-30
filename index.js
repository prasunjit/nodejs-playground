const express = require('express');
const app = express();

const decodeSong = require('./songDecoder')
 
app.get('/', (req, res) => {
  console.log(decodeSong.songDecoder('AWUBBUCWUBA'))
  res
    .status(200)
    .send('Hello, world!')
    .end();
});
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});