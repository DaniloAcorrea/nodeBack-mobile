import { RowDataPacket } from "mysql2";

export type login = RowDataPacket &{
    id: number;
    nome: string;
    email: string;
    senha: string;
    cargos: string;
}