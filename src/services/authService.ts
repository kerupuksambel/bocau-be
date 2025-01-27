import { ethers } from "ethers";


const SAMPLE_NONCE = "STATIC_NONCE_EXAMPLE"

const AuthService = {
    getNonce: () => {
        // TODO : Random nonce associated with each user
        return SAMPLE_NONCE;
    },
    
    verifyNonce: (signature: string, address: string) => {
        const recoveredAddress = ethers.verifyMessage(SAMPLE_NONCE, signature)
    
        return (recoveredAddress.toLowerCase() === address.toLowerCase())
    }
}

export default AuthService