import { pool } from "../database/database";
import { ResultSetHeader } from "mysql2";
 
 
async function fazerPedido(data: any){
    const sql = `INSERT INTO pedidos(id_cliente_fk, pagamento)VALUES ( ?, ?)`;
    try{
        const [result] = await pool.query<ResultSetHeader>(sql,[
            data.cliente_id,
            data.pagamento
        ]);
        return result.insertId;
    }catch(error){
        console.error("Erro ao criar pedido:", error);
        return error;
    }
}
 
async function fazerReserva(idPedido: number, quarto:object) {
 
}
 
export default {
    fazerPedido, fazerReserva
}