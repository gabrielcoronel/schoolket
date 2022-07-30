import express from "express";
const apiRouter = express.Router();

import * as db from "./database.js"

// Constantes de HTTP
const HTTP_SUCCESS = 200;
const HTTP_FAILURE = 400;

// Middleware para parsear las solicitudes en formato JSON
apiRouter.use(express.json());

async function create(request, response, createFunction) {
  const body = request.body;

  try {
    await createFunction(body);

    response.sendStatus(HTTP_SUCCESS);
    return;
  } catch (err) {
    console.log(err);

    response.sendStatus(HTTP_FAILURE);
    return;
  }
}

async function get(request, response, idKey, getFunction) {
  const idValue = request.body[idKey];

  try {
    const object = await getFunction(idValue);

    response.json(object);
    return;
  } catch (err) {
    console.log(err);

    response.sendStatus(HTTP_FAILURE);
    return;
  }
}

apiRouter.post("/createStudent", (req, res) => {
  create(req, res, db.createStudent);
});

apiRouter.post("/createProduct", (req, res) => {
  create(req, res, db.createProduct);
});

apiRouter.post("/getStudent", (req, res) => {
  get(req, res, "username", db.getStudent);
});

apiRouter.post("/getProduct", (req, res) => {
  get(req, res, "product_id", db.getProduct);
});

apiRouter.post("/getStudentProducts", async (req, res) => {
  const username = req.body.username;

  try {
    const products = await db.getStudentProducts(username);

    res.json(products);
    return;
  } catch (err) {
    console.log(err);

    res.sendStatus(HTTP_FAILURE);
    return;
  }
});

apiRouter.post("/getProductWithStudent", async (req, res) => {
  const product_id = req.body.product_id;

  try {
    const view = await db.getProductWithStudent(product_id);

    res.json(view);
  } catch (err) {
    console.log(err);

    res.sendStatus(HTTP_FAILURE);
    return;
  }
});

export default apiRouter;
export { apiRouter };