import { Router } from "express";
import quartosController from "../model/quartosController";

const rotaQuartos =Router();

rotaQuartos.post("/", quartosController.disponivel)

export default rotaQuartos;