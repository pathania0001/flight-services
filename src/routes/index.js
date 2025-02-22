import  express  from 'express';

import v1UserRouter from "./v1/index.js"

const router = express.Router();

router.use("/v1",v1UserRouter)

export default router;