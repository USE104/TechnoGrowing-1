import { Router } from 'express'
import {Request, Response} from 'express'

import * as homeController from '../controllers/HomeController'
import * as userController from '../controllers/userController'
import * as ongController from '../controllers/ongController'
import * as authController from '../controllers/authController'
import * as contatoController from '../controllers/contatoController'
import * as vagaController from '../controllers/vagaController'

const router = Router()

router.get('/',homeController.home)

router.get('/perfil',homeController.perfil)

router.get('/sobre',homeController.sobre)

router.get('/loja',homeController.loja)

router.get('/contato',homeController.contatos)

router.get('/contaOng',ongController.contaOng)

router.get('/confirmCad',homeController.confirmCad)

router.get('/cadFinalizado',homeController.cadFinalizado)

router.get('/404',homeController.erro)

router.get('/obrigado',homeController.obrigado)

// router.get('/vaga-finalizada',homeController.vagaCriada)

// router.get('/criar-conta-ong',ongController.contaOng)

router.get('/login',authController.login)

router.get('/contaUsuario',authController.contaUsuario)

router.get('/vagaCriada',vagaController.criarVaga)

router.get('/criarVaga',vagaController.Vagas)

router.get('/vagas',homeController.vaga)

//criação do post 
router.post('/contaUsuario',authController.contaUsuarioPost)
router.post('/contaOng',ongController.contaOngPost)
router.post('/contato',contatoController.contatoPost)
router.post('/criarVaga',vagaController.criarVagaPost)

export default router