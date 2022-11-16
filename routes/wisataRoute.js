import express from "express";
import {
  getWisata,
  getWisataById,
  createWisata,
  updateWisata,
  deleteWisata,
} from "../controller/Wisata.js";

const router = express.Router();

router.get("/wisata", getWisata);
router.get("/wisata/:id", getWisataById);
router.post("/wisata", createWisata);
router.patch("/wisata/:id", updateWisata);
router.delete("/wisata/:id", deleteWisata);

export default router;
