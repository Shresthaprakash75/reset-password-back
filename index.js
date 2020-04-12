const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
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

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/reset-password', (req, res) => {
    res.send(`let's reset password`)
})

app.post('/reset-password', (req, res) => {
    // console.log(req.body.email)
    // res.send(req.body)
    const checkMail = db.getCheckMail(req.body.email)
    // console.log(checkMail)
    checkMail.then((a) => {
        if(a){
            res.send({
                "is email valid" : a
            })
        }
    })
})

app.listen(port, () => console.log(`app listening at http://localhost: ${port}`))