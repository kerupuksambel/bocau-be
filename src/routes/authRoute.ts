import { getNonce } from "@/controllers/authController";
import { Router } from "express";

const authRoute = Router();

authRoute.get("/nonce", getNonce)

export default authRoute