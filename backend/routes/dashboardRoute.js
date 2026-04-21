import express from 'express'

import { getDahshboardOverview } from '../controllers/dashboardController.js'
import authMiddleware from '../middleware/auth.js'

const dashboardRouter = express.Router()

dashboardRouter.get("/",authMiddleware,getDahshboardOverview)

export default dashboardRouter;