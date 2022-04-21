// Inicializa o banco de dados

import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");

export default db;
