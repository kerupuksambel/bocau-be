import { Auction } from "@/types/auction"
import { get } from "http"

const AuctionService = {
    getAuctions: (): Auction[] => {
        return []
    },

    getAuctionByID: (id: string): Auction|null => {
        const auctions = AuctionService.getAuctions()

        return auctions.find(auction => auction.id === id) ?? null
    }
}

export default AuctionService