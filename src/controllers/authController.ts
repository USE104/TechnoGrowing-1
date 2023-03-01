import { Request, Response } from "express"
import { Voluntario } from "../models/Voluntario"
import bcrypt from 'bcrypt'

export const login = (req:Request, res:Response) =>{

    res.render('pages/login')
}

export const contaUsuario = (req:Request, res:Response) =>{

    res.render('pages/contaUsuario')
}

export const contaUsuarioPost = async (req:Request, res:Response) =>{
    //verificando as validações do usuário

    //recebendo as informações do usuário via body (POST)
    const {Nome,dataNascimento,Email,password,confirmpassword,CPF,Tel,Experiencia,RedeSocial,Url} = req.body

    //se password for diferente de confirmpassword
    if(password != confirmpassword){
        //enviar uma mensagem de erro ao usuário com flashmessage
        const message = req.flash('message')
        
        alert ('As senhas não conferem, tente novamente')

        res.redirect('/contaUsuario')
        
        return 
    }
    
    //checar se o usuário existe
    const checkIfUserExists = await Voluntario.findOne({

        where:{email:Email}

    })

    //se o usuário existir exibir uma flash message
    if(checkIfUserExists){
        const message = req.flash('message')
        req.flash('message','O e-mail já está em uso')
        res.redirect('/contaUsuario')

        return
    }

    //criar o password

    /*vamos dificultar a senha para o hacker não conseguir 
    quebrar a senha , então vamos por 10 caracteres randomicos */

    const salt = bcrypt.genSaltSync(10)
    //gerar a hash com o meu salt para o usuário 
    const hashedPassword = bcrypt.hashSync(password,salt)

    /*agora vamos criar um objeto de usuário 
    com os dados recebidos */  

    try{
        /* criando o usuário no banco */
        const user = await Voluntario.create({
            Nome,
            dataNascimento,
            Email,
            password: hashedPassword,
            CPF,
            Tel,
            Experiencia,
            RedeSocial,
            Url
        })

        req.session.userId = JSON.stringify(user.codVoluntario)


        req.flash('message','cadastro realizado com sucesso')

        req.session.save(() =>{
            res.redirect('/cadFinalizado')
        })


    } catch(err){
        console.log(err)
    }
}