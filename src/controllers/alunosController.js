import alunosService from '../services/alunosService.js';

const getAlunos = async (req, res) => {
  try {
    const alunos = await alunosService.getAlunos();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar alunos", error });
  }
};

const getAlunoById = async (req, res) => {
  const { id } = req.params;
  try {
    const aluno = await alunosService.getAlunoById(id);
    if (!aluno) return res.status(404).json({ message: "Aluno não encontrado" });
    res.json(aluno);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar aluno", error });
  }
};

const createAluno = async (req, res) => {
  const { nome, email, modalidade, data_nascimento, data_inicio } = req.body;
  try {
    const novoAluno = await alunosService.createAluno({ nome, email, modalidade, data_nascimento, data_inicio });
    res.status(201).json(novoAluno);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar aluno", error });
  }
};

const updateAluno = async (req, res) => {
  const { id } = req.params;
  const dados = req.body;
  try {
    const alunoAtualizado = await alunosService.updateAluno(id, dados);
    if (!alunoAtualizado) return res.status(404).json({ message: "Aluno não encontrado" });
    res.json(alunoAtualizado);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar aluno", error });
  }
};

const deleteAluno = async (req, res) => {
  const { id } = req.params;
  try {
    const alunoRemovido = await alunosService.deleteAluno(id);
    if (!alunoRemovido) return res.status(404).json({ message: "Aluno não encontrado" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover aluno", error });
  }
};

export default {
  getAlunos,
  getAlunoById,
  createAluno,
  updateAluno,
  deleteAluno
};
