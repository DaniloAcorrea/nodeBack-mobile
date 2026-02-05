import { Request, Response, NextFunction } from "express";
import loginRepository from "../repository/loginRepository";
import{validarSenha} from "../utils/senha";
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

export default {
  login
}