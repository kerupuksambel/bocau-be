import AuthController from "@/controllers/authController";
import { Router } from "express";

const authRoute = Router();

authRoute.post("/nonce", AuthController.getNonce)
authRoute.post("/verify", AuthController.verifyNonce)
// authRoute.get("/pubkey", AuthController.getJWTPublicKey)

export default authRoute