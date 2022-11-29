CREATE DATABASE perntodo;

CREATE TABLE todo
(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    status BOOLEAN DEFAULT FALSE
);


INSERT INTO todo (description) VALUES('learn react');
INSERT INTO todo (description) VALUES ('learn node');
INSERT INTO todo (description) VALUES ('build a todo app');
INSERT INTO todo (description) VALUES ('add on jest tests');
INSERT INTO todo (description) VALUES ('read about common javascript design patterns');
INSERT INTO todo (description) VALUES ('practice leetcode questions');
INSERT INTO todo (description) VALUES ('learn key data structures');