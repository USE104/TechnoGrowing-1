import { Request, Response } from "express"
import { VagasONG } from "../models/vagaOng"

export const criarVaga = (req:Request, res:Response) =>{
    res.render('pages/vagaCriada')
}

export const Vagas = (req:Request, res:Response) =>{
    res.render('pages/criarVaga')
}

export const criarVagaPost = async (req:Request, res:Response) =>{

    //recebendo as informações do usuário via body (POST)
    const {Vaga,Categoria,Descricao,Periodo,Horario} = req.body

    try{
        /* criando o usuário no banco */
        const user = await VagasONG.create({
            Vaga,
            Categoria,
            Descricao,
            Periodo,
            Horario
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

// export function criarVaga(arg0: string, criarVagas: (req: Request, res: Response) => void) {
//     throw new Error('Function not implemented.')
// }
