import express from 'express';
const main = express();

import apiRouter from "./apiRouter.js";

const PORT = 3001;

main.use("/api", apiRouter);

main.get("/", (_, res) => res.sendFile("/home/gabriel/projects/expotec/server/src/test.html"));

main.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));