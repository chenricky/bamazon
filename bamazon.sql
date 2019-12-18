DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE bamazonTable (
  id INT NOT NULL AUTO_INCREMENT,
  item_Name VARCHAR(100) NULL,
  department_Name VARCHAR(100) NULL,
  stock INT NOT NULL,
  recent_purchase INT NOT NULL,
  price DECIMAL(10,2) NULL,
  PRIMARY KEY (id)
);



INSERT INTO bamazonTable (item_Name, department_Name, stock, recent_purchase, price)
VALUES ("book_1", "Book store", 100, 0, 20);

INSERT INTO bamazonTable (item_Name, department_Name, stock, recent_purchase, price)
VALUES ("book_2", "Book store", 150, 0, 10);

INSERT INTO bamazonTable (item_Name, department_Name, stock, recent_purchase, price)
VALUES (" car_1", "Car dealer", 10, 0, 35000);

INSERT INTO bamazonTable (item_Name, department_Name, stock, recent_purchase, price)
VALUES (" car_2", "Car dealer", 25, 0, 25000);