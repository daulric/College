-- Insert sample data into Authors table
INSERT INTO Authors (author_id, name, nationality, birth_year)
VALUES
    (1, 'J.K. Rowling', 'British', 1965),
    (2, 'Ernest Hemingway', 'American', 1899),
    (3, 'Agatha Christie', 'British', 1890),
    (4, 'Gabriel García Márquez', 'Colombian', 1927),
    (5, 'Maya Angelou', 'American', 1928);

-- Insert sample data into Books table
INSERT INTO Books (book_id, title, author_id, genre, price, published_date)
VALUES
    (1, 'Harry Potter and the Philosopher''s Stone', 1, 'Fantasy', 9.99, '1997-06-26'),
    (2, 'The Old Man and the Sea', 2, 'Fiction', 7.99, '1951-09-01'),
    (3, 'Murder on the Orient Express', 3, 'Mystery', 8.99, '1934-01-01'),
    (4, 'One Hundred Years of Solitude', 4, 'Fiction', 12.99, '1967-05-30'),
    (5, 'I Know Why the Caged Bird Sings', 5, 'Autobiography', 10.99, '1969-06-17'),
    (6, 'Harry Potter and the Chamber of Secrets', 1, 'Fantasy', 9.99, '1998-07-02'),
    (7, 'The Sun Also Rises', 2, 'Fiction', 7.99, '1926-10-22'),
    (8, 'And Then There Were None', 3, 'Mystery', 8.99, '1939-11-06'),
    (9, 'Love in the Time of Cholera', 4, 'Fiction', 11.99, '1985-04-23'),
    (10, 'Wouldn''t Take Nothing for My Journey Now', 5, 'Poetry', 9.99, '1993-11-17');

-- Insert sample data into Sales table
INSERT INTO Sales (sale_id, book_id, quantity, sale_date)
VALUES
    (1, 1, 50, '2023-01-01'),
    (2, 2, 30, '2023-01-02'),
    (3, 3, 40, '2023-01-03'),
    (4, 4, 25, '2023-01-04'),
    (5, 5, 35, '2023-01-05'),
    (6, 1, 45, '2023-01-06'),
    (7, 6, 35, '2023-01-07'),
    (8, 2, 20, '2023-01-08'),
    (9, 7, 30, '2023-01-09'),
    (10, 8, 25, '2023-01-10'),
    (11, 9, 40, '2023-01-11'),
    (12, 10, 15, '2023-01-12'),
    (13, 1, 30, '2023-01-13'),
    (14, 6, 25, '2023-01-14'),
    (15, 3, 35, '2023-01-15');