-- Active: 1730487043708@@127.0.0.1@3306@learning_php
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT,
    address VARCHAR(100),
    gender VARCHAR(10)
);