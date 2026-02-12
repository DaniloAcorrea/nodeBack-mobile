import { QueryResult, RowDataPacket } from "mysql2";

export type Quarto = RowDataPacket & {
  id?: number;
  nome: string;
  numero: number;
  camaSolteiro: number;
  camaCasal: number;
  disponivel: number;
  preco: number;
}

export type QuartoReserva ={
    dataInicio: string
    dataFim: string
    quantidade: string
}

 
