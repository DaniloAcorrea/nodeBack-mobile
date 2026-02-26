import { Router } from "express";

import { middleware } from "./jwtMiddleware";

import rotaLogin from "./loginRouter";
import rotaQuartos from "./quartosRouter";
import rotaReservas from "./reservaRouter";

const handlerRouter = Router();

// rotas publicas
handlerRouter.use("/api/login", rotaLogin);
handlerRouter.use("/api/quartosDisponiveis", rotaQuartos);

// rotas privadas
handlerRouter.use("/api/reserva", middleware, rotaReservas);



export default handlerRouter
