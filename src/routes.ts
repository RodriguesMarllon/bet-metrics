import { Router } from "express"
import * as betController from "./controllers/bet-controller";

const router = Router()

router.post("/bet", betController.postBet);
router.get("/bet", betController.getBet);
router.get("/bet/:id", betController.getBetById);
router.put("/bet/:id", betController.putBet);
router.delete("/bet/:id", betController.deleteBet);

export default router;