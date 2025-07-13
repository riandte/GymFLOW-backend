import pg from 'pg';  
import dotenv from 'dotenv';

const { Pool } = pg; 

dotenv.config(); 

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port:     Number(process.env.DB_PORT),
  ssl:      { rejectUnauthorized: false },
});

pool.connect()
  .then(() => console.log("Conectado ao PostgreSQL com sucesso!"))
  .catch(err => console.error("Erro ao conectar ao PostgreSQL:", err));

export default pool; 