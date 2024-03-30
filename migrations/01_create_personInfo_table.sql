\c dummy_ahl_db;

create Table personInfo (
    id serial primary key,
    name varchar(255) not null,
    age INT not null,
    email varchar(255) not null,
    phone varchar(255) not null
    );