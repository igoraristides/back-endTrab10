import { createPool } from "mysql2/promise";

export async function connect() {
  const connection = await createPool({
    host: "localhost",
    user: "root",
    password: "aristides09",
    database: "clinica_medica",
    connectionLimit: 10,
  });
  return connection;
}
