const express = require("express");
const pool = require("./sql/postgresConfig");
const path = require("path")

const app = express();

const apiRouter = require("./routes/apiRouter");

app.use("/api", apiRouter);


app.listen(5000, () => {
    console.log("Listening on port 5000.")
});


app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "/build", "index.html"))
});