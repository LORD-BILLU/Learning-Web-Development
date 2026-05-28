const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! POST request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); 
})

// i have no idea what the fuck is going on in this video
// idk man i am gonna go with the flow 