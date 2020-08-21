const { Pool } = require('pg');
const format = require('date-format');

const pool = new Pool({
    host: 'localhost',
    user: 'alcatraz_manager',
    password: '123',
    database: 'felipeamado',
    port: '5432'
});

const getMessage = async (req, res) => {
    const response = await pool.query('SELECT * FROM messages ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const createMessage = async (req, res) => {
    const { name, message, email } = req.body;
    const created_at = format(new Date());

    const response = await pool.query('INSERT INTO messages (message, created_at, email, name) VALUES ($1, $2, $3, $4)', [
        message,
        created_at,
        email,
        name
    ]);

    res.json({
        message: 'Message was sent succesfully'
    })
};


module.exports = {
    getMessage,
    createMessage
};