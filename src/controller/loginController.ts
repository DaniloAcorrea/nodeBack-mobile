import { Request, Response, NextFunction } from "express";
import loginRepository from "../repository/loginRepository";
import{gerarSenha, validarSenha} from "../utils/senha";
import {createJWT} from "../utils/jwt"


async function login(req:Request, res:Response, next:NextFunction) {
  const { email, senha } = req.body;
  if (!email || !senha) {
      return res.status(400).json({ erro: "Email e senha são obrigatórios" });
  }
  if (email.trim() === "" || senha.trim() === "") {
      return res.status(401).json({ erro: "Email e senha não podem ser vazios" });
  }
  
  try {
    const result = await loginRepository.validateLogin(email);
      if(!result){throw new Error("senha invalida")}

      const resultSenha = await validarSenha(senha, result.senha)
      if(!resultSenha) {throw new Error("senha invalida")}

      const {senha:_senha, ...usuario} = result;

      const token = createJWT(usuario)
      return res.status(200).json(token);

    }catch(error){
      console.log(error)
      return res.status(402).json({ erro: "Email e senha não podem ser vazios" });
    }
}

async function cadastroCliente(req: Request, res: Response, next: NextFunction) {
  const {nome, email, senha, cpf, telefone} = req.body;

  if(!nome || !email || !senha || !cpf || !telefone){
    return res.status(400).json({error: "Todos os campos são obrigatorios !!"})
  }
  if(nome.trim()==="" || email.trim()==="" || senha.trim()==="" || cpf.trim()==="" || telefone.trim()===""){
    return res.status(400).json({error: "os campos n podem ser vazios !!"})

  }

  try {
    const senhaHash = await gerarSenha(senha);
    const dadosLogin = {nome, email, cpf, telefone, senha:senhaHash}
    const result = await loginRepository.cadastroLogin(dadosLogin)
    if(!result){throw new Error("erro ao cadastrar")}

    const {senha:_senha, cpf:_cpf, telefone:_tel, ...usuario} = result;
    
    
    const token = createJWT(usuario)
    return res.status(200).json(token);

  } catch (error) {
   console.log("error", error)
   return res.status(400).json({erro: "erro ao cadastrar cliente !!"}) 
  }
}

export default {
  login, cadastroCliente
}