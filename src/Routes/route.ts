import { Router } from "express";
import rotaLogin from "./loginRouter";
import quartosRouters from "./quartosRouter"

const handlerRouter = Router();

// rotas publicas

handlerRouter.use("/api/login", rotaLogin);
handlerRouter.use("/api/login", rotaLogin);

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