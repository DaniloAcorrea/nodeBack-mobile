import { promises } from "dns";
import {pool} from "../database/database";
import { dadosLogin, Login } from "../model/login";
import { QueryResult, ResultSetHeader } from "mysql2";


export async function validateLogin(email:string):Promise<Login|null>{
    const sql = `SELECT clientes.id, clientes.nome, clientes.email, clientes.senha, roles.nome AS cargo
        FROM clientes JOIN roles ON clientes.id_roles_fk = roles.id
        WHERE clientes.email = ?`
    
        const [rows] = await pool.query<Login[]>(sql, [email]);
        return rows.length ? rows[0] : null
}

export async function cadastroLogin(dadosLogin:dadosLogin):Promise<Login|null>{
    const sql = `INSERT INTO clientes (nome, email, cpf, telefone, senha)
        VALUES(?, ?, ?, ?, ?)`;
    const [result] = await pool.query<ResultSetHeader>(sql, [
        dadosLogin.nome,
        dadosLogin.email,
        dadosLogin.cpf,
        dadosLogin.telefone,
        dadosLogin.senha,

    ]);
    if (result.insertId) {
        const resultado:Login = {id:result.insertId, ...dadosLogin}
        return resultado;
    }
    return null;

}
export default{
    validateLogin, cadastroLogin
}
