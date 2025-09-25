import { Router } from "express";
import artistController from "../controller/artistController";

const router = Router();

router.get("/", artistController.getArtist);
router.post("/", artistController.postArtist);
router.put("/:id", artistController.updateArtist);
router.delete("/:id", artistController.deleteArtist);

export default router;
