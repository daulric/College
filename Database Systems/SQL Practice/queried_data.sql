-- Top 5 Books Sold;

SELECT b.title, SUM(s.quantity) as total_quantity_sold from books b
join sales s on b.book_id = s.book_id
GROUP BY b.title
ORDER BY total_quantity_sold DESC LIMIT 5;

-- Listing Authors from a Particular Genre;
SELECT a.name, COUNT(DISTINCT b.genre) as genre_count
from authors a
join books b on a.author_id = b.author_id
GROUP BY a.name
having COUNT(DISTINCT b.genre) > 1;

-- Authrs with the total sales revenue;
select a.name, sum(b.price * s.quantity) as total_sales_amount
from authors a
join books b on a.author_id = b.author_id
join sales s on b.book_id = s.book_id
group by a.name
order by total_sales_amount desc limit 1;