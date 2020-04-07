const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
    })
);
// app.use(express.json);

const port = 4000

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/reset-password', (req, res) => {
    res.send(`let's reset password`)
    // console.log(emails)
})

app.post('/reset-password', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.listen(port, () => console.log(`app listening at http://localhost: ${port}`))