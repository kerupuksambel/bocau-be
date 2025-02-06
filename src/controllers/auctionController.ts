import { Request, Response } from "express";
import AuctionService from "@/services/auctionService";

const AuctionController = {
    getAuctions: (req: Request, res: Response) => {
        const auctions = AuctionService.getAuctions()
        res.status(200).json({ data: auctions, success: true })
    },

    getAuctionByID: (req: Request, res: Response) => {
        const id = req.params.id
        const auction = AuctionService.getAuctionByID(id)
        res.status(auction ? 200 : 404).json({ data: auction, success: auction ? true : false })
    }
}

export default AuctionController