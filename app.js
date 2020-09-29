var express = require("express")
var app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, process.env.IP, () => {
  console.log(`App running`)
})