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
                phone_number DECIMAL(6,2) NOT NULL,
                email VARCHAR(100) NOT NULL,
                primary key (id)
            )
        `;

      clientsDbConnection.query(clientTableQuery, function (err) {
        if (err) throw err;
        console.log("Clients Table created");
      });
    });
  }
);

module.exports = {
  clientsDbConnection,
};
