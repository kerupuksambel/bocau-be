import AuctionController from "@/controllers/auctionController";
// import AuthController from "@/controllers/authController";
import { Router } from "express";

const auctionRouter = Router();

auctionRouter.get("/", AuctionController.getAuctions)
auctionRouter.get("/:id", AuctionController.getAuctionByID)

export default auctionRouter