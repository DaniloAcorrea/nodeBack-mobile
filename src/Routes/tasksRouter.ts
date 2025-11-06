import { Router } from "express";

const router = Router();

router.get("/", ()=>console.log("pegar todas as tarefas"))
router.get("/:id", ()=>console.log("pegar uma tarefas"))
router.post("/", ()=>console.log("cadastra uma tarefas"))
router.put("/:id", ()=>console.log("atualizar uma tarefas"))
router.delete("/:id", ()=>console.log("deletar tarefas"))

export default router
