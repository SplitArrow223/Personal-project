DROP TABLE IF EXISTS users;
CREATE TABLE users 
(
  users_id serial PRIMARY KEY,
  users_email VARCHAR(100) NOT NULL,
  users_hash text NOT null,
  is_admin boolean DEFAULT false,
  username VARCHAR(30) NOT NULL
);


DROP TABLE IF EXISTS course;
CREATE TABLE course 
(
  course_id serial PRIMARY KEY,
  course_name VARCHAR(60),
  course_location VARCHAR(150),
  course_par INTEGER
);
drop table if exists rounds
CREATE TABLE rounds 
(
  round_id serial PRIMARY KEY,
  course_id INTEGER, FOREIGN KEY(course_id) REFERENCES course(course_id),
  users_id INTEGER, FOREIGN KEY(users_id) REFERENCES users(users_id),
  score INTEGER
);


