import express from "express";
import {
  getDivWisata,
  getDivWisataById,
  createDivWisata,
} from "../controller/DivWisata.js";

const router = express.Router();

router.get("/divwisata", getDivWisata);
router.get("/divwisata/:id", getDivWisataById);
router.post("/divwisata", createDivWisata);

export default router;
