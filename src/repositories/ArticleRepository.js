const db = require('../database');

class ArticleRepository {
  // Отримати всі статті
  async getAllArticles() {
    const [rows] = await db.execute('SELECT * FROM articles');
    return rows;
  }

  // Отримати статтю за ID
  async getArticleById(id) {
    const [rows] = await db.execute('SELECT * FROM articles WHERE id = ?', [id]);
    return rows[0];
  }

  // Створити нову статтю
  async createArticle(title, content) {
    const result = await db.execute(
      'INSERT INTO articles (title, content) VALUES (?, ?)', 
      [title, content]
    );
    return result[0];
  }

  // Оновити статтю
  async updateArticle(id, title, content) {
    const result = await db.execute(
      'UPDATE articles SET title = ?, content = ? WHERE id = ?', 
      [title, content, id]
    );
    return result[0];
  }

  // Видалити статтю
  async deleteArticle(id) {
    const result = await db.execute('DELETE FROM articles WHERE id = ?', [id]);
    return result[0];
  }
}

module.exports = new ArticleRepository();