const db = require('../database');

class UserRepository {
  // Отримати всіх користувачів
  async getAllUsers() {
    const [rows] = await db.execute('SELECT * FROM users');
    return rows;
  }

  // Отримати користувача за ID
  async getUserById(id) {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  // Створити нового користувача
  async createUser(name, email) {
    const result = await db.execute(
      'INSERT INTO users (name, email) VALUES (?, ?)', 
      [name, email]
    );
    return result[0];
  }

  // Оновити користувача
  async updateUser(id, name, email) {
    const result = await db.execute(
      'UPDATE users SET name = ?, email = ? WHERE id = ?', 
      [name, email, id]
    );
    return result[0];
  }

  // Видалити користувача
  async deleteUser(id) {
    const result = await db.execute('DELETE FROM users WHERE id = ?', [id]);
    return result[0];
  }
}

module.exports = new UserRepository();