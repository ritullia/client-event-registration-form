const mysql = require("mysql2");

const mysqlDataBaseConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
};

const clientsDbConnection = mysql.createConnection({
  ...mysqlDataBaseConfig,
  database: "",
});

// sukuriam db klientu registravimui

clientsDbConnection.query(
  "CREATE DATABASE IF NOT EXISTS clients",
  function (err) {
    if (err) throw err;
    console.log("Database clients created");

    clientsDbConnection.query("USE clients", (err) => {
      if (err) throw err;

      const clientTableQuery = `
            CREATE TABLE IF NOT EXISTS
            client (
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(100) NOT NULL,
                lastname VARCHAR(100) NOT NULL,
                phone_number BIGINT(20) NOT NULL,
                email VARCHAR(100) NOT NULL,
                primary key (id),
                user_ID int,
                FOREIGN KEY (userID) REFERENCES user(id)
            )
        `;

      clientsDbConnection.query(clientTableQuery, function (err) {
        if (err) throw err;
        console.log("Client Table created");
      });

      const usersTableQuery = `
            CREATE TABLE IF NOT EXISTS
            user (
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(100) NOT NULL,
                lastname VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(100) NOT NULL,
                primary key (id)
            )
        `;

      clientsDbConnection.query(usersTableQuery, function (err) {
        if (err) throw err;
        console.log("Users Table created");
      });
    });
  }
);

module.exports = {
  clientsDbConnection,
};
