import { RowDataPacket } from "mysql2";

export type Login = RowDataPacket &{
    id: number;
    nome: string;
    email: string;
    senha: string;
    cargos: string;
}

export type dadosLogin = {
    nome: string
    email: string
    cpf: string
    telefone: string
    senha: string
}