
Firstly, before you move onto the next lecture, please remember that order is important when dealing with combining/wrapping certain string functions.

For example:

This works:


SELECT UPPER(CONCAT(author_fname, ' ', author_lname)) AS "full name in caps"
FROM books;

While this does not:

SELECT CONCAT(UPPER(author_fname, ' ', author_lname)) AS "full name in caps" 
FROM books;