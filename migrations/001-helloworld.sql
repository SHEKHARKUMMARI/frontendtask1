-- Up
CREATE TABLE Port(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT ,
    code TEXT,
    city TEXT,
    state TEXT,
    country TEXT
);

INSERT INTO Port(name,code,city,state,country) VALUES('cherlapally','IN','vizac','and','india');
INSERT INTO Port(name,code,city,state,country) VALUES('pavan','pavan@123','aus','xyz','austrelai');


-- Down
DROP TABLE Port;
