import express from 'express';

import apiRouter from "./apiRouter.js";

const main = express();
const PORT = 3000;

main.use("/api", apiRouter);

main.get("/", (_, res) => res.sendFile("/home/gabriel/projects/expotec/server/src/test.html"));

main.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));