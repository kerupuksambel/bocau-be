import { getNonce as nonce } from "@/services/authService"
import { NextFunction, Request, Response } from "express"

export const getNonce = (req: Request, res: Response) => {
    const msg = nonce();
    res.status(200).json({ msg: msg })
}