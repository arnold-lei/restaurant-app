CREATE DATABASE restaurant_db;

USE restaurant_db;

CREATE TABLE reservations(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NULL,
  phone INT(10) NULL,
  email VARCHAR(100) NULL,
  unique VARCHAR(100) NULL,
  PRIMARY KEY(id)
);