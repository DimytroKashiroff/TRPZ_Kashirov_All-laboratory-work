const UserRepository = require('../repositories/UserRepository');

// Отримати всіх користувачів
exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserRepository.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send('Помилка при отриманні користувачів');
  }
};

// Отримати користувача за ID
exports.getUserById = async (req, res) => {
  try {
    const user = await UserRepository.getUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('Користувача не знайдено');
    }
  } catch (error) {
    res.status(500).send('Помилка при отриманні користувача');
  }
};

// Створити нового користувача
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await UserRepository.createUser(name, email);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send('Помилка при створенні користувача');
  }
};