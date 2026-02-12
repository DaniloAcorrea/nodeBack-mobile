import { Request, Response, NextFunction } from "express";
import quartosRepository from "../repository/quartosRepository";
import { error } from "console";

async function disponivel(req:Request, res:Response, next:NextFunction) {
    const {dataInicio, dataFim, quantidade} = req.body;

    if(!dataInicio || !dataFim || !quantidade){
        return res.status(400).json({erro:"Preencha os campos para consulta"})
    }

    const dados = {dataInicio, dataFim, quantidade}

    try {
        let quartos = await quartosRepository.disponivel(dados)
        if(!quartos){throw new Error("Error ao buscar os quartos")}

        for(let q of quartos){
            const fotos = await quartosRepository.buscarFotosQuartoId(q.id);
            q.fotos = fotos
        }
        res.status(200).json(quartos);
    } catch (error) {
        console.log(error)
        return res.status(400).json({erro:"Error ao buscar os quartos"})
    }
}

export default{disponivel}