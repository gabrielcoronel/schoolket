import express from "express";
import * as db from "./database.js";
import dirName from "./dirName.js";
import { existsSync } from 'node:fs';

const apiRouter = express.Router();

// Constantes de HTTP
const HTTP_SUCCESS = 200;
const HTTP_FAILURE = 400;

// Middleware para parsear las solicitudes en formato JSON
apiRouter.use(express.json());

async function create(request, response, createFunction) {
  const body = request.body;
  console.log(`create: trying to create ${JSON.stringify(body)}`);

  try {
    await createFunction(body);
    console.log(`create: created ${JSON.stringify(body)}`);

    response.sendStatus(HTTP_SUCCESS);
    return;
  } catch (err) {
    console.log(`create: failed to create ${JSON.stringify(body)}`);
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
    console.log(`get: retrieved ${JSON.stringify(object)}`);

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

apiRouter.post("/getStudentAvatar", (req, res) => {
  const username = req.body.username;
  const base = "/img/profile";
  const format = "png";

  const url = `${base}/${username}.${format}`;

  if (existsSync(url)) {
    res.json({
      url: url
    });
    return;
  } else {
    res.sendStatus(HTTP_FAILURE);

    return;
  }
});

export default apiRouter;