select Name from students
select *from students where Age>30
select Name from students where Gender='F' and Age=30
select Points from students where Name='Alex'
INSERT INTO students VALUES(7,'Rasha',25,'F',400)

UPDATE students SET Points = 500 where Name='Basma'

UPDATE students SET Points = 150 where Name='Alex'

CREATE TABLE graduate(
ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
Name TEXT NOT NULL UNIQUE,
Age INTEGER,
Gender TEXT,
Points INTEGER,
Graduation TEXT
);
INSERT INTO graduate VALUES(1,'Layal',18,'F',350,'08/09/2018')

DELETE FROM students WHERE Name='Layal';

