-- Active: 1730487043708@@127.0.0.1@3306@book_store
CREATE TABLE Authors (
    author_id int NOT NULL,
    name varchar(255),
    nationality varchar(255),
    birth_year int,
    PRIMARY KEY (author_id)
);

CREATE TABLE Books (
    book_id INT NOT NULL,
    title VARCHAR(255),
    author_id int,
    genre VARCHAR(255),
    price DECIMAL(9, 2),
    published_date DATE,
    PRIMARY KEY (book_id),
    Foreign Key (author_id) REFERENCES Authors(author_id)
);

CREATE TABLE Sales (
    sale_id int not null,
    book_id int not null,
    quantity INT,
    sale_date DATE,
    PRIMARY KEY (sale_id),
    FOREIGN KEY (book_id) REFERENCES Books(book_id)
);