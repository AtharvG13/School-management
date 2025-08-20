import mysql from "mysql2/promise";
import { config } from "dotenv";

config({ path: "./config.env" });

const db = await mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

console.log("Database connected successfully");

export default db;
