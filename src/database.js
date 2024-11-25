const mysql = require('mysql2');

// Підключення до бази даних MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',  // замініть на ваш користувацький логін
  password: '',  // замініть на ваш пароль
  database: 'litebrowse_db'
});

// Створюємо проміс для зручності використання в асинхронному коді
const promisePool = pool.promise();

module.exports = promisePool;
