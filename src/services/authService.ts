import { ethers } from "ethers";


const SAMPLE_NONCE = "STATIC_NONCE_EXAMPLE"

export const getNonce = () => {
    // TODO : Random nonce associated with each user
    return SAMPLE_NONCE;
}

export const verifyNonce = (signature: string, address: string) => {
    const recoveredAddress = ethers.verifyMessage(SAMPLE_NONCE, signature)

    return (recoveredAddress.toLowerCase() === address.toLowerCase())
}