import express from "express";
import fileUpload from 'express-fileupload';
import * as db from "./database.js";
import dirName from "./dirName.js";
import { existsSync, writeFileSync } from 'node:fs';

const apiRouter = express.Router();

// Constantes de HTTP
const HTTP_SUCCESS = 200;
const HTTP_FAILURE = 400;

const IMAGE_FORMAT = "png";

// Middleware para parsear las solicitudes en formato JSON y archivos
apiRouter.use(express.json());
apiRouter.use(fileUpload());

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
  console.log(`exists: trying to read ${idKey}`);

  const idValue = request.body[idKey];
  console.log(`exists: read ${idValue}`)

  console.log(`exists: trying to check ${idValue}`)
  try {
    const result = await existsFunction(idValue);
    console.log(`exists: got ${result}`)

    response.json(result);
    return
  } catch (err) {
    console.log(`exists: failed to check ${idValue}`);
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
  const base = "/img/avatar";
  const url = `${base}/${username}.${IMAGE_FORMAT}`;

  console.log("getStudentAvatar");
  console.table({ username, base, url });

  if (existsSync(url)) {
    res.json({
      url: url
    });

    console.log("getStudentAvatar: file exists");
    return;
  } else {
    res.sendStatus(HTTP_FAILURE);

    console.log("getStudentAvatar: file doesn't exist");
    return;
  }
});

apiRouter.post("/storeStudentAvatar", async (req, res) => {
  const [username] = Object.keys(req.files);
  const [avatar] = Object.values(req.files);
  const path = `${dirName}/../student_avatars/${username}.${IMAGE_FORMAT}`;

  console.log("/storeStudentAvatar: trying to store an avatar");
  console.log(path);
  console.log(avatar);

  await avatar.mv(path);

  res.sendStatus(HTTP_SUCCESS);
});

export default apiRouter;