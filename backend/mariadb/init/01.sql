CREATE DATABASE IF NOT EXISTS rewards;
USE rewards;
CREATE TABLE IF NOT EXISTS 'rewards' (
	'custID' varchar(255),
	'firstName' varchar(255),
	'lastName' varchar(255),
	'points' int(11)
	);