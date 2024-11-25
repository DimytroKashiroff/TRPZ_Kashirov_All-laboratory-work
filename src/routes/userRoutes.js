const express = require('express');
const cors = require('cors');
const indexRoute = require('./routes/index'); // Підключення маршруту
const browserRoutes = require('./routes/browserRoutes');

const app = express();

app.use(cors());
app.use('/', indexRoute);  // Головний маршрут
app.use('/browser', browserRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});