const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgres://wcgmyneu:CBH50DEPRmfV_IFsVpz54rTWJtO1Bvth@kandula.db.elephantsql.com:5432/wcgmyneu"
});

module.exports = pool;


