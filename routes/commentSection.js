import express from "express";
import {
  getComment,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} from "../controller/Comment.js";

const router = express.Router();

router.get("/comment", getComment);
router.get("/comment/:id", getCommentById);
router.post("/comment", createComment);
router.patch("/comment/:id", updateComment);
router.delete("/comment/:id", deleteComment);

export default router;
