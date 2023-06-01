const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const upload = require("../config/multer");

router.get('/', UsuarioController.listar);
router.get('/:codigo', UsuarioController.buscarPorCodigo);
router.get('/buscanome/:nome', UsuarioController.buscarPorNome);
router.get('/buscasobrenome/:sobrenome', UsuarioController.buscarPorSobrenome);
router.get('/buscacidade/:cidade', UsuarioController.buscarPorCidade);
router.get('/buscaestado/:estado', UsuarioController.buscarPorEstado);
router.get('/buscastatus/:status', UsuarioController.buscarPorStatus);
router.post('/', UsuarioController.salvar);
router.put('/:codigo', upload.single('imagem') ,UsuarioController.atualizar);
router.delete('/:codigo', UsuarioController.excluir);
router.post('/assinante', upload.single('imagem'), UsuarioController.salvar);

module.exports = router;