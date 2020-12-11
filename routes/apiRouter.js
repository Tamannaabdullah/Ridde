const { Router } = require("express");
const pool = require("../sql/postgresConfig");
const bodyParser = require("body-parser");

const router = Router();

router.get("/scores", async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM users ORDER BY score");
        const users = response.rows;
        return res.status(200).json(users);
    } catch (err){
        console.log("Error: ", err);
        return res.status(500).send("Something went wrong on our end, sorry!")
    }
});

// bodyParser allows access to req.body to access form data.
router.post("/answer", bodyParser.json(), async (req, res) => {
    // Get values out of form
    const name = req.body.name;
    const question = req.body.question;
    const answer = req.body.answer;

    if (!name || !question || !answer) return res.send("Sorry, not all fields found.")

    try {
        // Add to answered table
        let response = await pool.query("INSERT INTO answered(name, question, answer) VALUES($1, $2, $3)", [name, question, answer]);
        return res.status(200).send("CORRECT!!!!");

    } catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong on our end, sorry!")
    }
});

module.exports = router;
