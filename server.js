const express = require('express')

const app = express()

const routers = require('./app/controllers')

const PORT = process.env.PORT || 3000

app.use(routers)

app.listen(PORT, () => {
    console.log(`Server running at port ${ PORT }`)
})
