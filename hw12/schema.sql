CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  stock_quantity INT(11) NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  price INT(11) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (stock_quantity, product_name, price, department_name)
VALUES (100, 'PS4', 399, 'Video Games');
INSERT INTO products (stock_quantity, product_name, price, department_name)
VALUES (45, 'XBOX', 399, 'Video Games');
INSERT INTO products (stock_quantity, product_name, price, department_name)
VALUES (3, 'TV', 1099, 'Home Entertainment');
INSERT INTO products (stock_quantity, product_name, price, department_name)
VALUES (432, 'HP Laptop', 799, 'Computers');
INSERT INTO products (stock_quantity, product_name, price, department_name)
VALUES (5632, 'HDMI Cord', 15, 'TV Accessories');
INSERT INTO products (stock_quantity, product_name, price, department_name)
VALUES (7856, 'Coke', 5, 'Food/Drinks');
INSERT INTO products (stock_quantity, product_name, price, department_name)
VALUES (588789, 'AA Battery', 15, 'Home Products');
INSERT INTO products (stock_quantity, product_name, price, department_name)
VALUES (122, 'Coffee Maker', 599, 'Home Products');
INSERT INTO products (stock_quantity, product_name, price, department_name)
VALUES (64738, 'Star Wars DVD', 12, 'Movies');
INSERT INTO products (stock_quantity, product_name, price, department_name)
VALUES (29304, 'Office Chair', 99, 'Office Supplies');
INSERT INTO products (stock_quantity, product_name, price, department_name)
VALUES (55, 'iPhone', 999, 'Phones');

SELECT * FROM products;
