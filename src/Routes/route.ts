import { Router } from "express";
import rotaLogin from "./loginRouter";
import quartosRouters from "./quartosRouter"
import rotaQuartos from "./quartosRouter";

const handlerRouter = Router();

// rotas publicas

handlerRouter.use("/api/login", rotaLogin);
handlerRouter.use("/api/consulta", rotaQuartos);
handlerRouter.use("/api/", );

// handlerRouter.use("/jwt", (req, res)=>{
//     const payload = {
//         id: 123,
//         nome: "fulano",
//         cargo: "cliente"
//     }
//     res.json(createJWT(payload))
// })

// // rotas privadas
// handlerRouter.get("/testeJWT", middleware, (req, res)=>{
//     res.json("passou pelo JWT middleware")
// })

export default handlerRouter