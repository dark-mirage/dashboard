import Database from "better-sqlite3";
import bcrypt from "bcrypt";

const db = new Database("database.sqlite");
const emailToCheck = "yuldashevtimik@gmail.com"; // твой email
const passwordToCheck = "твой_новый_пароль"; // пароль, который вводишь

const user = db.prepare("SELECT * FROM users WHERE email = ?").get(emailToCheck);

if (!user) {
  console.log("Пользователь не найден");
} else {
  const match = bcrypt.compareSync(passwordToCheck, user.password);
  console.log("Пароль верный?", match);
}
