const Pool = require("pg").Pool;

// configure where the db is located

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "perntodo",
    port: 5432
});

module.exports = pool;