import {pool} from "../database/database";
import { RowDataPacket } from "mysql2";
import { QuartoReserva } from "../model/quartos";

async function disponivel(pedido:QuartoReserva):Promise<Quartos|null> {
    const sql = `SLECT * FROM quartos q WHERE q.disponivel = 1 AND (q.)`
    
}