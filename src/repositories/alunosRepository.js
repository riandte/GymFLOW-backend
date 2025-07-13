import pool from '../config/db.js';

const getAlunos = async () => {
  const result = await pool.query('SELECT * FROM alunos ORDER BY id_aluno');
  return result.rows;
};

const getAlunoById = async (id) => {
  const result = await pool.query('SELECT * FROM alunos WHERE id_aluno = $1', [id]);
  return result.rows[0];
};

const createAluno = async ({ nome, email, modalidade, data_nascimento, data_inicio }) => {
  const result = await pool.query(
    'INSERT INTO alunos (nome, email, modalidade, data_nascimento, data_inicio) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [nome, email, modalidade, data_nascimento, data_inicio]
  );
  return result.rows[0];
};

const updateAluno = async (id, dados) => {
  const { nome, email, modalidade, data_nascimento, data_inicio } = dados;
  const result = await pool.query(
    'UPDATE alunos SET nome = $1, email = $2, modalidade = $3, data_nascimento = $4, data_inicio = $5 WHERE id_aluno = $6 RETURNING *',
    [nome, email, modalidade, data_nascimento, data_inicio, id]
  );
  return result.rows[0];
};

const deleteAluno = async (id) => {
  const result = await pool.query('DELETE FROM alunos WHERE id_aluno = $1 RETURNING *', [id]);
  return result.rows[0];
};

export default {
  getAlunos,
  getAlunoById,
  createAluno,
  updateAluno,
  deleteAluno
};
