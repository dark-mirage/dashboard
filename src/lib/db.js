import Database from "better-sqlite3";

function getDB() {
  const db = new Database("./database.sqlite");
  db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT
    )
  `).run();
  return db;
}

export default getDB;
