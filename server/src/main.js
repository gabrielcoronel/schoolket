import express from 'express';
import cors from 'cors';
import apiRouter from "./apiRouter.js";
import imgRouter from './imgRouter.js';

const main = express();
const PORT = 3001;

main.use("/", cors());
main.use("/", express.static("/home/gabriel/projects/expotec/client/build"));

main.use("/api", apiRouter);
main.use("/img", imgRouter);

main.get("/", (_, res) => res.sendFile("/index.html"));

main.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));