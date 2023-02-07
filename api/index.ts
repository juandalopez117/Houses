const express = require('express')
const app = express()
const port = process.env.port || 3001
const db = require('./models/index')


db.sequelize.sync()
.then(() => {
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
    })
})