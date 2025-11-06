import { Request, Response, NextFunction } from "express";

function getTasks(req:Request, res:Response, next:NextFunction){
  res.send("pegar todas as tarefas");
}
function getTask(req:Request, res:Response, next:NextFunction){
  res.send("pegar uma tarefa");
}
function createTask(req:Request, res:Response, next:NextFunction){
  res.send("Criar uma tarefa");
}
function atualizarTask(req:Request, res:Response, next:NextFunction){
  res.send("atualizar uma tarefa");
}
function deletarTask(req:Request, res:Response, next:NextFunction){
  res.send("deletar uma tarefa");
}

export default { getTask, getTasks, createTask, atualizarTask, deletarTask }
