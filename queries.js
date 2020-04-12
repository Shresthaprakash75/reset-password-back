const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'lms',
    password: 'password',
    port: 5432,
})

const getCheckMail = async(email) => {
    // const checkEmail = (req, res) => {
        const queryString = "select exists(select 1 from users where email='" + email + "')"
        const result = await pool.query(queryString)
        return result.rows[0].exists  
    // }
    // return checkEmail()
}

module.exports = {
    getCheckMail,
}