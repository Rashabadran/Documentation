1. select Name from students
2. select * from students where Age>30
3. select Name from students where Gender='F' and Age=30
4. select Points from students where Name='Alex'
5. INSERT INTO students VALUES(7,'Rasha',25,'F',400)

6. UPDATE students SET Points = 500 where Name='Basma'

7. UPDATE students SET Points = 150 where Name='Alex'

10. CREATE TABLE graduate(
ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
Name TEXT NOT NULL UNIQUE,
Age INTEGER,
Gender TEXT,
Points INTEGER,
Graduation TEXT
);

INSERT INTO  graduates (Id,Name,Age,Gender,Points)
SELECT Id,Name,Age,Gender,Points FROM students
WHERE name="Layal";

11. UPDATE graduates
SET Graduation = '08/09/2018'
WHERE name="Layal";


12. DELETE FROM students WHERE Name='Layal';

14. SELECT employees.name, employees.Company, companies.Date
FROM (employees
INNER JOIN companies ON employees.Company = companies.name);

15. SELECT employees.name
FROM (employees
INNER JOIN companies ON employees.Company = companies.name AND companies.Date<2000);

16. SELECT companies.Name
FROM (companies
INNER JOIN employees ON employees.Company = companies.name AND employees.Role='Graphic Designer');
