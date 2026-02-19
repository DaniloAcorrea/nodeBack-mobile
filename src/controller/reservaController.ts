import {Request, Response, NextFunction} from "express"
import quartosRepository from "../repository/quartosRepository";
import reservaRepository from "../repository/reservaRepository";
 



async function corrigirData(data:string, hora:number) {
    
}

async function criarPedido(req:Request, res:Response, next:NextFunction) {
    const token = req.payload;
    const {pagamento, quarto} = req.body;
 
    if(!token.id || !pagamento) {
        return res.status(400).json({message: "Dados incompletos para criar pedido"})
    }
 
    try{
        const dadosPedidos = {
            cliente_id : token.id,
            pagamento : pagamento
        }

        const pedidoID = await reservaRepository.fazerPedido(dadosPedidos)
        if(!pedidoID){throw new Error("error ao criar pedido")}

        let result = []
        for(let q of quarto){
            let data = new Date(q.dataInicio)
            q.setHoures(q.dataInicio, 14)
            q.setHoures(q.dataFim, 12)
            q.dataInicio = data

            const reservaID = await reservaRepository.fazerReserva(pedidoID, q)
            if(!reservaID){continue}
            result.push({
                ...q,
                reservaID: reservaID,
            })
        }
        console.log(result)

        res.status(200).json("Reserva feita com sucesso")

    }catch(error){
        console.log(error)
        return res.status(400).json({message: "Reserva n efetuada"})
    }
    console.log(token.id, token.nome);
    console.log(pagamento)
    console.log(quarto)
    return res.sendStatus(200);
   
}
 
 
export default {
    criarPedido
}