import { ethers } from "ethers";
import { readFile, readFileSync } from "fs";
import jwt from "jsonwebtoken";
import path from "path";


const SAMPLE_NONCE = "STATIC_NONCE_EXAMPLE"
const PRIV_KEY = readFileSync(path.join(__dirname, "../../.keys/private.pem"), "utf8")
const PUB_KEY = readFileSync(path.join(__dirname, "../../.keys/public.pem"), "utf8")

const AuthService = {

    getNonce: () => {
        // TODO : Random nonce associated with each user
        return SAMPLE_NONCE;
    },
    
    verifyNonce: (signature: string, address: string) => {
        const recoveredAddress = ethers.verifyMessage(SAMPLE_NONCE, signature)
    
        return (recoveredAddress.toLowerCase() === address.toLowerCase())
    },

    generateToken: (address: string) => {
        const payload = {
            address: address,
            exp: Math.floor(Date.now() / 1000) + 5, // Token expires in 5 sec
        }

        return jwt.sign(payload, PRIV_KEY, {algorithm: "RS256"})
    },

    verifyToken: (token: string) => {
        return jwt.verify(token, PRIV_KEY, {algorithms: ["RS256"]})
    },

    getPublicKey: () => {
        return PUB_KEY
    }
    
}

export default AuthService