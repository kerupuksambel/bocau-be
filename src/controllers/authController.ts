import AuthService from "@/services/authService"
import { Request, Response } from "express"

const AuthController = {
    getNonce: (req: Request, res: Response) => {
        const msg = AuthService.getNonce();
        res.status(200).json({ msg: msg })
    },
    
    verifyNonce: (req: Request, res: Response) => {
        // Check if signature and address is present
        const { signature, address } = req.body
    
        if (!signature || !address) {
            res.status(400).json({ msg: "Bad request", success: false })
            return;
        }
    
        if (!AuthService.verifyNonce(signature, address)) {
            res.status(401).json({ msg: "Unauthorized", success: false })
            return;
        }
   
        const token = AuthService.generateToken(address)
        res.status(200).json({ msg: "Authorized", token: token, success: true })
    },

    // getJWTPublicKey: (req: Request, res: Response) => {
    //     const pubKey = AuthService.getPublicKey()
    //     res.status(200).json({ msg: pubKey, success: true })
    // }
}

export default AuthController;