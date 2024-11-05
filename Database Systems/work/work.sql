-- Active: 1730487043708@@127.0.0.1@3306@simple_db
CREATE TABLE Customers (
    CustomerID INT NOT NULL UNIQUE,
    CustomerName VARCHAR(255),
    ContactName VARCHAR(255),
    Address VARCHAR(255),
    City VARCHAR(255),
    PostalCode INT,
    Country VARCHAR(255),
    PRIMARY KEY (CustomerID)
);

insert into customers(`CustomerID`, `CustomerName`, `ContactName`, `Address`, `City`, `PostalCode`, `Country`)
VALUES
    (1, 'Alfreds Futterkiste', 'Maria Anders', 'Obere Str, 57', 'Berlin', '12209', 'Germany'),
    (2, 'Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Avda. de la Constitución 2222', 'México D.F.', '05021', 'Mexico'),
    (3, 'Antonio Moreno Taquería', 'Antonio Moreno', 'Mataderos 2312', 'México D.F.', '05023', 'Mexico'),
    (4, 'Around the Horn', 'Thomas HardyThomas Hardy', '120 Hanover Sq.', 'London', 'WA1 1DP', 'UK'),
    (5, 'Berglunds snabbköp', 'Christina Berglund', 'Berguvsvägen 8', 'Luleå', 'S-958 22', 'Sweden');

