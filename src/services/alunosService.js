import alunosRepository from '../repositories/alunosRepository.js';

const getAlunos = async () => {
  return await alunosRepository.getAlunos();
};

const getAlunoById = async (id) => {
  return await alunosRepository.getAlunoById(id);
};

const createAluno = async (dados) => {
  return await alunosRepository.createAluno(dados);
};

const updateAluno = async (id, dados) => {
  return await alunosRepository.updateAluno(id, dados);
};

const deleteAluno = async (id) => {
  return await alunosRepository.deleteAluno(id);
};

export default {
  getAlunos,
  getAlunoById,
  createAluno,
  updateAluno,
  deleteAluno
};
