DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE bamazonTable (
  item_ID INT NOT NULL,
  item_Name VARCHAR(100) NULL,
  department_Name VARCHAR(100) NULL,
  stock INT NOT NULL,
  PRIMARY KEY (item_ID)
);

SELECT * FROM bamazonDB;