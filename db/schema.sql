### Schema

CREATE DATABASE bugs_db;
USE bugs_db;

CREATE TABLE bugs
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
