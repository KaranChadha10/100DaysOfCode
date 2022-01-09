create table Employees 
(
    id int not null AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(50) not null, 
    last_name varchar(50) not null,
    middle_name varchar(50),
    age int not null,
    current_status varchar(50) not null default 'employed',
    
);