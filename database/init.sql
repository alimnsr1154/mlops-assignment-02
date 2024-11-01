-- init.sql
CREATE DATABASE mlops;
CREATE USER your_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE mlops TO your_user;
