CREATE TABLE Department (
    DeptID VARCHAR(18) NOT NULL UNIQUE,
    DepartmentName VARCHAR(255),
    PRIMARY KEY (DeptID)
);

INSERT INTO Department (DeptID, DepartmentName)
VALUES ('HR', 'Human Resource')
('FIN', 'Finance') ('MK', 'Marketing') ('DLV', "Delivery");

CREATE TABLE Employee (
    EmployeeID VARCHAR(18) NOT NULL UNIQUE,
    EmployeeName VARCHAR(255),
    PhoneNumber VARCHAR(10),
    DeptID VARCHAR(18),
    PRIMARY KEY (EmployeeID),
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

INSERT INTO Employee (EmployeeID, EmployeeName, PhoneNumber, DeptID)
VALUES ('EMP1', 'Ulric Aird', "478-0921", "HR100")
("EMP2", "Ted Bundy", "982-8743", "FIN")
("EMP3", "Kyle Richh", "837-1920", "FIN")
("EMP4", "Anthony Higgins", "873-9293", "MK")
("EMP5", "Mya Khalifa", "892-2039", "DLV");

CREATE TABLE Supplier (
    SupplierID VARCHAR(18) NOT NULL UNIQUE,
    SupplierName VARCHAR(255),
    ContactNumber VARCHAR(10),
    DeptID VARCHAR(18),
    PRIMARY KEY (SupplierID),
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

INSERT INTO Supplier (SupplierID, SupplierName, ContactNumber, DeptID)
VALUES ("IAL", "Independent Agency Limited", "672-9374", "DLV")
("SUB", "Superb Distributor", "928-3920", "DLV")
("HuD", "Hubbard Distributors", "823-2083", "DLV");

CREATE TABLE Product (
    ProductID VARCHAR(18) NOT NULL UNIQUE,
    ProductName VARCHAR(255),
    Price DECIMAL(15, 2),
    Quantity INT,
    SupplierID VARCHAR(18),
    PRIMARY KEY (ProductID),
    FOREIGN KEY (SupplierID) REFERENCES Supplier(SupplierID)
);
CREATE TABLE Customer (
    CustomerID VARCHAR(18) NOT NULL UNIQUE,
    CustomerName VARCHAR(255),
    ProductID VARCHAR(18),
    EmployeeID VARCHAR(18),
    PRIMARY KEY (CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Product(ProductID),
    FOREIGN KEY (EmployeeID) REFERENCES Employee(EmployeeID)
);