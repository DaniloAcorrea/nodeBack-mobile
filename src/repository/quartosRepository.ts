import { pool } from "../database/database";
import { RowDataPacket } from "mysql2";
import { QuartoReserva, Quarto } from "../model/quartos";
 
async function disponiveis(pedido: QuartoReserva): Promise<Quarto | null> {
    const sql = `SELECT * FROM quartos q WHERE q.disponivel = true
            AND ((q.camaCasal * 2) + q.camaSolteiro) >= ?
            AND q.id NOT IN (
                SELECT r.id_quarto_fk
                FROM reservas r
                WHERE (r.dataFim >= ? AND r.dataInicio <= ?)
            )`;
 
    const [quartos] = await pool.query<Quarto[]>(sql, [
        pedido.quantidade,
        pedido.dataInicio,
        pedido.dataFim,
    ])
    return quartos.length ? quartos : null
}
 
async function buscarFotoPorQuartoId(id: number) {
    const sql = `SELECT i.caminho FROM quartos QF
        JOIN imagens i ON QF.d_imagem_fk = i.id WHERE
         QF.id = ?`;
 
    const [fotos] = await pool.query<RowDataPacket[]>(sql, [id])
    return fotos.map(foto => (foto.caminho))
}
 
export default {
    disponiveis, buscarFotoPorQuartoId
}