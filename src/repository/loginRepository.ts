import { promises } from "dns";
import {pool} from "../database/database";
import { login } from "../model/login";


export async function validateLogin(email:string):Promise<login|null>{
    const sql = `SELECT clientes.id, clientes.nome, clientes.email, clientes.senha, roles.nome AS cargo
        FROM clientes JOIN roles ON clientes.id_roles_fk = roles.id
        WHERE clientes.email = ?`
    
        const [rows] = await pool.query<login>(sql, [email]);
        return rows.length ? rows[0] : null
}

export default{
    validateLogin
}