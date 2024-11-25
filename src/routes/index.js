const express = require('express');
const path = require('path');
const router = express.Router();

// Рендеринг index.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'index.html')); // Шлях до файлу у корені
});

module.exports = router;