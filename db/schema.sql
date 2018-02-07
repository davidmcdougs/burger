DROP DATABASE IF EXISTS burger_db;
create database burger_db;

use burger_db;



CREATE TABLE burgers (
id INTEGER AUTO_INCREMENT NOT NULL,
name VARCHAR(50) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);


INSERT INTO burgers (name, devoured)
VALUES ("Veggie Burger", false);

INSERT INTO burgers (name, devoured)
VALUES ("Mushdroom Swiss", false);

INSERT INTO burgers (name, devoured)
VALUES ("Buffalo Burger", false);

update burgers set devoured = true where name = "veggie Burger"