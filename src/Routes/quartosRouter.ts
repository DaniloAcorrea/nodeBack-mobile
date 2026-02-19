import { Router } from "express";
import quartosController from "../controller/quartosController";

const rotaQuartos = Router();

rotaQuartos.post("/", quartosController.disponivel)

export default rotaQuartos;