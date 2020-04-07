const express = require('express')
const app = express()
const port = 4000

const cors = require('cors')
app.use(cors())
app.get('/', (req, res) => res.send("hello from home"))
app.get('/reset-password', (req, res) => {
    console.log(req.params)
    res.send('reset my password')
})

app.listen(port, () => console.log(`Example app listening at http://localhost: ${port}`))