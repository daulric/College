-- Active: 1730487043708@@127.0.0.1@3306@supermarket
CREATE TABLE Department (
    DeptID VARCHAR(18) NOT NULL UNIQUE,
    DepartmentName VARCHAR(255),
    PRIMARY KEY (DeptID)
);

INSERT INTO Department (DeptID, DepartmentName)
VALUES 
    ('HR', 'Human Resources'),
    ('FIN', 'Finance'), ('MK', 'Marketing'), ('DLV', 'Delivery');

CREATE TABLE Employee (
    EmployeeID VARCHAR(18) NOT NULL UNIQUE,
    EmployeeName VARCHAR(255),
    PhoneNumber VARCHAR(10),
    DeptID VARCHAR(18),
    PRIMARY KEY (EmployeeID),
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

INSERT INTO Employee (EmployeeID, EmployeeName, PhoneNumber, DeptID)
VALUES 
    ('EMP1', 'Ulric Aird', '478-0921', 'HR'),
    ('EMP2', 'Ted Bundy', '982-8743', 'FIN'),
    ('EMP3', 'Kyle Richh', '837-1920', 'FIN'),
    ('EMP4', 'Anthony Higgins', '873-9293', 'MK'),
    ('EMP5', 'Mya Khalifa', '892-2039', 'DLV');

CREATE TABLE Supplier (
    SupplierID VARCHAR(18) NOT NULL UNIQUE,
    SupplierName VARCHAR(255),
    ContactNumber VARCHAR(10),
    DeptID VARCHAR(18),
    PRIMARY KEY (SupplierID),
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

INSERT INTO Supplier (SupplierID, SupplierName, ContactNumber, DeptID)
VALUES 
    ('IAL', 'Independent Agency Limited', '672-9374', 'DLV'),
    ('SUB', 'Superb Distributor', '928-3920', 'DLV'),
    ('HuD', 'Hubbard Distributors', '823-2083', 'DLV');

CREATE TABLE Product (
    ProductID VARCHAR(18) NOT NULL UNIQUE,
    ProductName VARCHAR(255),
    Price DECIMAL(15, 2),
    Quantity INT,
    SupplierID VARCHAR(18),
    PRIMARY KEY (ProductID),
    FOREIGN KEY (SupplierID) REFERENCES Supplier(SupplierID)
);

INSERT INTO Product (ProductID, ProductName, Price, Quantity, SupplierID)
VALUES 
    ('PROD001', 'Whole Wheat Bread', 2.99, 100, 'IAL'),
    ('PROD002', 'Organic Milk', 3.50, 200, 'SUB'),
    ('PROD003', 'Eggs (Dozen)', 4.00, 150, 'HuD'),
    ('PROD004', 'Fresh Apples', 1.20, 300, 'IAL'),
    ('PROD005', 'Chicken Breast', 7.99, 80, 'SUB'),
    ('PROD006', 'Cheddar Cheese', 5.75, 120, 'HuD'),
    ('PROD007', 'Orange Juice', 3.00, 180, 'IAL'),
    ('PROD008', 'Rice (5 lb)', 6.50, 90, 'SUB'),
    ('PROD009', 'Pasta (1 lb)', 1.50, 200, 'HuD'),
    ('PROD010', 'Tomato Sauce', 2.25, 250, 'IAL');

CREATE TABLE Customer (
    CustomerID VARCHAR(18) NOT NULL UNIQUE,
    CustomerName VARCHAR(255),
    ProductID VARCHAR(18),
    EmployeeID VARCHAR(18),
    PRIMARY KEY (CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Product(ProductID),
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);

INSERT INTO Customer (CustomerID, CustomerName, ProductID, EmployeeID)
VALUES 
    ('CUST001', 'Alice Johnson', 'PROD001', 'EMP2'),
    ('CUST002', 'Michael Brown', 'PROD002', 'EMP3'),
    ('CUST003', 'Sophia Turner', 'PROD003', 'EMP2'),
    ('CUST004', 'James Wilson', 'PROD005', 'EMP3'),
    ('CUST005', 'Emma Davis', 'PROD006', 'EMP2'),
    ('CUST006', 'Liam Martinez', 'PROD007', 'EMP3'),
    ('CUST007', 'Olivia Garcia', 'PROD008', 'EMP2'),
    ('CUST008', 'Noah Rodriguez', 'PROD009', 'EMP3'),
    ('CUST009', 'Ava Thompson', 'PROD001', 'EMP2'),
    ('CUST010', 'William White', 'PROD004', 'EMP3'),
    ('CUST011', 'Mia Smith', 'PROD002', 'EMP2'),
    ('CUST012', 'Elijah Brown', 'PROD006', 'EMP3'),
    ('CUST013', 'Isabella Johnson', 'PROD007', 'EMP2'),
    ('CUST014', 'Lucas Davis', 'PROD005', 'EMP3'),
    ('CUST015', 'Charlotte Wilson', 'PROD003', 'EMP2'),
    ('CUST016', 'Benjamin Garcia', 'PROD008', 'EMP3'),
    ('CUST017', 'Evelyn Rodriguez', 'PROD001', 'EMP2'),
    ('CUST018', 'Henry Martinez', 'PROD004', 'EMP3'),
    ('CUST019', 'Amelia Thompson', 'PROD002', 'EMP2'),
    ('CUST020', 'Alexander White', 'PROD006', 'EMP3');