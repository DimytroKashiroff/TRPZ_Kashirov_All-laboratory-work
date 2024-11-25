class Page {
    constructor(id, userId, url, title, loadTime) {
      this.id = id;
      this.userId = userId;
      this.url = url;
      this.title = title;
      this.loadTime = loadTime;
    }
  
    static async create(userId, url, title) {
      // Логіка для створення нової сторінки
    }
  
    static async getById(id) {
      // Логіка для отримання сторінки за ID
    }
  }
  
  module.exports = Page;