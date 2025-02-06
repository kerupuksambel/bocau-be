import { Router } from "express";
import authRoute from "./authRoute";
import auctionRouter from "./auctionRoute";

const router = Router()

router.use('/auth', authRoute)
router.use('/auction', auctionRouter)

export default router