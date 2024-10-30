
CREATE TABLE Department (
    DeptID VARCHAR(18) NOT NULL UNIQUE,
    DepartmentName VARCHAR(255),
    PRIMARY KEY (DeptID)
);

CREATE TABLE Employee (
    EmployeeID VARCHAR(18) NOT NULL UNIQUE,
    EmployeeName VARCHAR(255),
    PhoneNumber VARCHAR(10),
    DeptID VARCHAR(18),
    PRIMARY KEY (EmployeeID),
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

CREATE TABLE Supplier (
    SupplierID VARCHAR(18) NOT NULL UNIQUE,
    SupplierName VARCHAR(255),
    ContactNumber VARCHAR(10),
    DeptID VARCHAR(18),
    PRIMARY KEY (SupplierID),
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

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