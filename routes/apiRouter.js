const { Router } = require("express");
const pool = require("../sql/postgresConfig");
const bodyParser = require("body-parser");

const router = Router();

router.get("/scores", async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM users");
        const users = response.rows;
        return res.status(200).json(users);
    } catch (err){
        console.log("Error: ", err);
        return res.status(500).send("Something went wrong on our end, sorry!")
    }
});

// bodyParser allows access to req.body to access form data.
router.post("/answer", bodyParser.urlencoded({extended: false}), async (req, res) => {
    // Get values out of form
    const name = req.body.name;
    const question = req.body.question;
    const answer = req.body.answer;
    if (!name || !question || !answer) return res.send("Sorry, not all fields found.")

    try {
        // Check the user is valid (in users table)
        let response = await pool.query("SELECT * FROM users WHERE name=$1", [name]);
        if (response.rows.length === 0) return res.send("Sorry, we dont recongise your name!")

        // Check valid question, will get its answer
        response = await pool.query("SELECT * FROM questions WHERE question = $1", [question]);
        if (response.rows.length === 0) return res.send("Invalid question number");
        const correctAnswer = response.rows[0].answer;

        // Incorrect answer
        if (correctAnswer !== answer){
            return res.status(200).send("Wrong! try again.")
        }

        // Check they haven't answered the question already
        response = await pool.query("SELECT * FROM answered WHERE name=$1 AND question=$2", [name, question]);
        if (response.rows.length !== 0) return res.send("Trying to answer again huh ;)?");

        // Correct answer
        let points = 1;
        response = await pool.query("SELECT * FROM answered WHERE question=$1", [question]); 
        if (response.rows.length < 3) points = 4 - response.rows.length;

        // Update user table score
        response = await pool.query("UPDATE users SET score=score+$1 WHERE name=$2", [points, name]);

        // Add to answered table
        response = await pool.query("INSERT INTO answered(name, question) VALUES($1, $2)", [name, question]);
        return res.status(200).send("CORRECT!!!!");

    } catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong on our end, sorry!")
    }
});

module.exports = router;
