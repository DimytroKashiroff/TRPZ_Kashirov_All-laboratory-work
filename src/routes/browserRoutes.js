const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');  // Для парсингу HTML
const router = express.Router();

// Маршрут для завантаження сторінки
router.get('/load', async (req, res) => {
  const { url } = req.query;  // Отримуємо URL з запиту

  try {
    // Використовуємо axios для завантаження сторінки
    const response = await axios.get(url);

    // Використовуємо cheerio для аналізу HTML
    const $ = cheerio.load(response.data);

    // Отримуємо всі підключені JavaScript файли
    const jsFiles = [];
    $('script[src]').each((i, el) => {
      jsFiles.push($(el).attr('src'));
    });

    // Отримуємо всі підключені CSS файли
    const cssFiles = [];
    $('link[rel="stylesheet"]').each((i, el) => {
      cssFiles.push($(el).attr('href'));
    });

    // Отримуємо всі зображення
    const images = [];
    $('img').each((i, el) => {
      images.push($(el).attr('src'));
    });

    // Відправляємо ці дані на фронтенд
    res.json({
      htmlStructure: $.html(),
      jsFiles,
      cssFiles,
      images,
    });
  } catch (error) {
    console.error('Error fetching the URL:', error);
    res.status(500).send('Помилка при завантаженні сторінки');
  }
});

module.exports = router;