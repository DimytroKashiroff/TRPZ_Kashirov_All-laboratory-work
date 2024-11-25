const express = require('express');
const cors = require('cors');
const path = require('path');
const indexRoute = require('./routes/index');
const browserRoutes = require('./routes/browserRoutes');  // Підключаємо новий маршрут

const app = express();

// Додаємо CORS для доступу до сервера з іншого домену (якщо потрібно)
app.use(cors());

// Використовуємо маршрут для головної сторінки
app.use('/', indexRoute);

// Використовуємо маршрути для браузера
app.use('/browser', browserRoutes);  // Тепер всі маршрути в browserRoutes.js будуть доступні через /browser

// Вказуємо статичні файли (наприклад, для index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Запуск серверу
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});