import express from "express";
const apiRouter = express.Router();

import * as db from "./database.js";

// Constantes de HTTP
const HTTP_SUCCESS = 200;
const HTTP_FAILURE = 369;

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
  console.log(`get: trying to get ${idKey}`);

  const idValue = request.body[idKey];
  console.log(`get: got ${idValue}`);

  console.log(`get: trying to retrieve data from database`);
  try {
    const object = await getFunction(idValue);
    console.log(`get: retrieved ${object}`);

    response.json(object);
    return;
  } catch (err) {
    console.log(`get: failed at retrieving data from database`);
    console.log(err);

    response.sendStatus(HTTP_FAILURE);
    return;
  }
}

async function exists(request, response, idKey, existsFunction) {
  const idValue = request.body[idKey];

  try {
    const result = await existsFunction(idValue);

    response.json(result);
    return
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

apiRouter.post("/getStudentProducts", (req, res) => {
  get(req, res, "username", db.getStudentProducts);
});

apiRouter.post("/getProductWithStudent", (req, res) => {
  get(req, res, "product_id", db.getProductWithStudent);
});

apiRouter.post("/existsStudent", (req, res) => {
  exists(req, res, "username", db.existsStudent);
})

apiRouter.post("/existsProduct", (req, res) => {
  exists(req, res, "product_id", db.existsProduct);
});

export default apiRouter;
export { apiRouter };