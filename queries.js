const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'lms',
    password: 'password',
    port: 5432,
})


const checkEmail = (req, res) => {
    const email = "prakas5@gmail.com"
    const queryString = "select exists(select 1 from users where email='" + email + "')"
    pool.query(queryString, (error, results) =>{
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    checkEmail,
}