-- init.sql
CREATE DATABASE your_database;
CREATE USER your_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE your_database TO your_user;
