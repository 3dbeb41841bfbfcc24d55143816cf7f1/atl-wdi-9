<--Contents: 4 Schemas
<--SQL challenges
<--Link to ERD


DROP TABLE IF EXIST users;
DROP TABLE IF EXISTS rentals;
DROP TABLE IF EXISTS stays;
DROP TABLE IF EXISTS calender

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20),
  email VARCHAR(20),
  credit_card INTEGER
);

CREATE TABLE ren
tals (
  id SERIAL PRIMARY KEY,
  address VARCHAR(100),
  price INTEGER,
  userId INTEGER
);

CREATE TABLE stays (
  id SERIAL PRIMARY KEY,
  address VARCHAR(100),
  price INTEGER,
  userId INTEGER
);

CREATE TABLE calender (
	id SERIAL PRIMARY KEY,
	rentalId INTEGER,
	stayId INTEGER,
	userId INTEGER,
	dates_rental INTEGER,
	dates_stay INTEGER
);

1. SELECT * FROM users
2. SELECT * FROM users, rentals, stays, calender
3. SELECT credit_card FROM users JOIN ON rentals.userId = users.id 
4. UPDATE rentals SET price = 100 WHERE price > 0;
5. UPDATE rentals SET address = "5800 Pennsylvania Ave" WHERE address = "1000 Union Avenue";

ERD SCHEMA
https://erdplus.com/#/edit-diagram/275602