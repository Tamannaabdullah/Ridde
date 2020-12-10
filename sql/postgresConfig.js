const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgres://wcgmyneu:CBH50DEPRmfV_IFsVpz54rTWJtO1Bvth@kandula.db.elephantsql.com:5432/wcgmyneu"
});

const test = async () => {
    await pool.query(`INSERT INTO users(name, score) VALUES('leyla', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('josh', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('olivia', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('jakewych', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('jakewilkinson', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('harrison', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('leon', 0)`);
    await pool.query(`INSERT INTO users(name, score) VALUES('olivia', 0)`);
}

test();

module.exports = pool;


