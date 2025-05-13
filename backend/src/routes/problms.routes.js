import express from "express";
import { authMiddleware, checkAdmin } from "../middleware/auth.middleware";

const problemRoutes = express.Router();

problemRoutes.post(
  "/create-problem",
  authMiddleware,
  checkAdmin,
  createProblem
);

problemRoutes.get("/get-all-problem", authMiddleware, getAllproblems);

problemRoutes.get("/get-problem/:id", authMiddleware, getProblemById);

problemRoutes.put(
  "/update-problem/:id",
  authMiddleware,
  checkAdmin,
  updateProblem
);

problemRoutes.delete(
  "/delete-problem/:id",
  authMiddleware,
  checkAdmin,
  deleteProblem
);

problemRoutes.get(
  "/get-solved-problems",
  authMiddleware,
  getProblemsSolvedByUser
);

export default problemRoutes;
