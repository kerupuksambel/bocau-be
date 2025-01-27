import AuthController from "@/controllers/authController";
import { Router } from "express";

const authRoute = Router();

authRoute.post("/nonce", AuthController.getNonce)
authRoute.post("/verify", AuthController.verifyNonce)

export default authRoute