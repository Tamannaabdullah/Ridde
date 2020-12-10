CREATE TABLE answered(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    question VARCHAR(255),
    answer VARCHAR(255),
    time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- -- Get answers for a question
-- SELECT * FROM answered WHERE question="Q1" ORDER BY date;

-- id   name   quyestion   answer 
-- -   JOsh D   Q1            mpapasd


-- -- Update scores
-- UPDATE users SET score=score+3 WHERE name="leyla";
-- UPDATE users SET score=score+2 WHERE name="james";
-- UPDATE users SET score=score+1 WHERE name="leyla";

-- -- users TABLE
-- id    name   score
-- -     joshd  0
-- -    leyla   0
-- -    liv    0

-- INSERT INTO users(name, score) VALUES("josh", 0);
-- INSERT INTO users(name, score) VALUES("leyla", 0);
-- INSERT INTO users(name, score) VALUES("olivia", 0);
-- INSERT INTO users(name, score) VALUES("josh", 0);
-- INSERT INTO users(name, score) VALUES("josh", 0);
-- INSERT INTO users(name, score) VALUES("josh", 0);
-- INSERT INTO users(name, score) VALUES("josh", 0);
-- INSERT INTO users(name, score) VALUES("josh", 0);
-- INSERT INTO users(name, score) VALUES("josh", 0);
-- INSERT INTO users(name, score) VALUES("josh", 0);
-- INSERT INTO users(name, score) VALUES("josh", 0);
-- INSERT INTO users(name, score) VALUES("josh", 0);
-- INSERT INTO users(name, score) VALUES("josh", 0);
-- INSERT INTO users(name, score) VALUES("josh", 0);
-- INSERT INTO users(name, score) VALUES("josh", 0);



