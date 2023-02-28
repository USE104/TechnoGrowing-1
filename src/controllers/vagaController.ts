import { Request, Response } from "express"
import { VagasONG } from "../models/vagaOng"

export const login = (req:Request, res:Response) =>{
    res.render('pages/login')
}

export const Vaga = (req:Request, res:Response) =>{
    res.render('pages/criarVaga')
}

export const cadVagaPost = async (req:Request, res:Response) =>{
    //verificando as validações do usuário

    //recebendo as informações do usuário via body (POST)
    const {NomeONG,Vaga,Categoria,Descricao,Periodo,Horario,Endereco} = req.body

    try{
        /* criando o usuário no banco */
        const user = await VagasONG.create({
            NomeONG,
            Vaga,
            Categoria,
            Descricao,
            Periodo,
            Horario,
            Endereco
        })

        req.session.userId = JSON.stringify(user.codVaga)

        req.flash('message','cadastro realizado com sucesso')

        req.session.save(() =>{
            res.redirect('/vagaCriada')
        })


    } catch(err){
        console.log(err)
    }
}