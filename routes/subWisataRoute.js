import express from "express";
import {
  getSubWisata,
  getSubWisataById,
  createSubWisata,
} from "../controller/SubWisata.js";

const router = express.Router();

router.get("/subwisata", getSubWisata);
router.get("/subwisata/:id", getSubWisataById);
router.post("/subwisata", createSubWisata);

export default router;
