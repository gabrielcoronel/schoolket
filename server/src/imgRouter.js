import express from 'express';
import dirName from './dirName.js';

const imgRouter = express.Router();

imgRouter.use("/profile", express.static(dirName + "../profile_pictures"));

export default imgRouter;