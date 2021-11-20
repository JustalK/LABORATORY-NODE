const { readdirSync } = require('fs')
const express = require('express')
const app = express()
const port = 3000

readdirSync('src/experiences').forEach((direct) => {
  app.use(`/${direct}`, require(`./experiences/${direct}`))
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
