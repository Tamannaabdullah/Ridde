const express = require("express");
const pool = require("./sql/postgresConfig");
const path = require("path")

const app = express();

const apiRouter = require("./routes/apiRouter");

app.use("/api", apiRouter);

// FORM FOR TESTING - DELETE
// app.get("/", (req, res) => {
//     res.send(`
//     <form action="/api/answer" method="POST">
//         <label for="name">Name<label>
//         <input name="name" type="text" />

//         <label for="question">Question<label>
//         <input name="question" type="text" />

//         <label for="answer">Answer<label>
//         <input name="answer" type="text" />

//         <button type="submit">Submit</button>
//     </form>
//     `);
// });


app.listen(5000, () => {
    console.log("Listening on port 5000.")
});


app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "/build", "index.html"))
});