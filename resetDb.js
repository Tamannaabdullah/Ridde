const pool = require("./sql/postgresConfig");

const test = async () => {
    await pool.query(`INSERT INTO users(name, score) VALUES('leyla', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('nicola', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('olivia', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('josh', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('james', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('joe', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('jakewilkinson', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('becky', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('ned', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('jakewych', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('conor', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('leon', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('harrison', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('eachann', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('shaan', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('reece', 0)`);
}

test();
console.log("done");
