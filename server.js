const express = require('express')
const app = express()
const port = 3000
app.get('https://private-anon-826afe648b-shipstation.apiary-mock.com/orders', (request, response) => {
response.send();
console.log(response);
});
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
});
