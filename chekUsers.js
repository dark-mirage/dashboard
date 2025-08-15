// checkUsers.js
import Database from "better-sqlite3";

const db = new Database("database.sqlite");

// Получаем всех пользователей
const users = db.prepare("SELECT id, name, email, password FROM users").all();
console.log(users);
