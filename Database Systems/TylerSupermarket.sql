-- Active: 1730487043708@@127.0.0.1@3306@tylersupermarket
-- 1. Create the Department table first, as it has no dependencies.
CREATE TABLE Department (
    DepID CHAR(15) NOT NULL UNIQUE,
    DepName CHAR(255),
    PRIMARY KEY (DepID)
);

-- 2. Create the Supplier table next, as it references Department.
CREATE TABLE Supplier (
    SuppID CHAR(15) NOT NULL UNIQUE,
    ContactNo INT,
    DepID CHAR(15),
    PRIMARY KEY (SuppID),
    FOREIGN KEY (DepID) REFERENCES Department(DepID)
);

-- 3. Create the Product table, as it references Supplier.
CREATE TABLE Product (
    ProdID CHAR(15) NOT NULL UNIQUE,
    ProdName VARCHAR(255),
    Price DECIMAL(9, 2),
    Amount VARCHAR(255),
    SuppID CHAR(15),
    PRIMARY KEY (ProdID),
    FOREIGN KEY (SuppID) REFERENCES Supplier(SuppID)
);

-- 4. Create the Employee table, as it references Department.
CREATE TABLE Employee (
    EmpID CHAR(15) NOT NULL UNIQUE,
    EmpName CHAR(255),
    Contact CHAR(255),
    Address CHAR(255),
    DepID CHAR(15),
    PRIMARY KEY (EmpID),
    FOREIGN KEY (DepID) REFERENCES Department(DepID)
);

-- 5. Create the Customer table last, as it references Product.
CREATE TABLE Customer (
    CustomerID CHAR(15) NOT NULL UNIQUE,
    CustName CHAR(255),
    ProdID CHAR(15),
    PRIMARY KEY (CustomerID),
    FOREIGN KEY (ProdID) REFERENCES Product(ProdID)
);

-- Inserting data into Department
INSERT INTO Department (DepID, DepName)
VALUES 
    ('2223', 'Toiletries'),
    ('3232', 'Food & Snacks'),
    ('1111', 'Drinks'),
    ('3333', 'Frozen goods'),
    ('4444', 'Babies needs');

-- Inserting data into Employee
INSERT INTO Employee (EmpID, EmpName, Contact, Address, DepID)
VALUES 
    ('1', 'Tom Brady', '435-1313', 'Tempe', '4444'),
    ('2', 'Steve Jobs', '444-4444', 'St. George', '2223'),
    ('3', 'Nigel Charles', '433-1222', 'St. David', '3333'),
    ('4', 'John Brown', '484-8843', 'St. Patrick', '1111'),
    ('5', 'Garfield String', '432-4383', 'St. Andrew', '3232');

-- Inserting data into Supplier
INSERT INTO Supplier (SuppID, ContactNo, DepID)
VALUES 
    ('89', 4330099, '4444'),
    ('91', 4005000, '3232'),
    ('94', 4330922, '3333'),
    ('97', 4240581, '1111'),
    ('101', 5483888, '2223');

-- Inserting data into Product
INSERT INTO Product (ProdID, ProdName, Price, Amount, SuppID)
VALUES 
    ('10', 'Diapers', 19.00, '3', '89'),
    ('13', 'Guava Dixee', 12.50, '5', '91'),
    ('14', 'Frozen Chicken Wings', 37.50, '3', '94'),
    ('15', 'Minute Maid', 15.00, '3', '97'),
    ('16', 'Plunger', 20.00, '1', '101');

-- Inserting data into Customer
INSERT INTO Customer (CustomerID, CustName, ProdID)
VALUES 
    ('23', 'Tom Hanks', '10'),  -- Adjusted ProdID to match assumed existing records
    ('33', 'Sam Smith', '13'),
    ('55', 'Donald Trump', '14'),
    ('88', 'David Hasselhoff', '15'),
    ('12', 'Shena Williams', '16');