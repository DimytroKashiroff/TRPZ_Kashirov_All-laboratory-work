class User {
    constructor(id, username, password, email) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.email = email;
    }
  
    static async create(username, password, email) {
      // Логіка для створення нового користувача в базі даних
    }
  
    static async getById(id) {
      // Логіка для отримання користувача за ID
    }
  }
  
  module.exports = User;