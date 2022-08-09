import express from 'express';
import dirName from './dirName.js';

const imgRouter = express.Router();

imgRouter.use("/avatar", express.static(dirName + "../student_avatars"));

export default imgRouter;