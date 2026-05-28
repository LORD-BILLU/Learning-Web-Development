const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! BILLU GAMER hi')
})

app.get('/about', (req, res) => {
  res.send('About me')
})

app.get('/contact', (req, res) => {
  res.send('Contact Me')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// what the fuck is .params.slug idk man
//samaj mein nahi aya yar kya karu bacha