import express from 'express';
import alunosController from '../controllers/alunosController.js';

const router = express.Router();

router.get('/', alunosController.getAlunos);
router.get('/:id', alunosController.getAlunoById);
router.post('/', alunosController.createAluno);
router.put('/:id', alunosController.updateAluno);
router.delete('/:id', alunosController.deleteAluno);

export default router;
