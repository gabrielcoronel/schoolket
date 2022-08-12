import express from 'express';
import cors from 'cors';
import apiRouter from "./apiRouter.js";

const main = express();

const PORT = process.env.PORT || 3001;

main.use("/", cors());

main.use("/api", apiRouter);

main.get("/", (_, res) => res.sendFile("../../client/build/index.html"));

main.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));