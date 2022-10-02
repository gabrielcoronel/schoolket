import express from "express";
import fileUpload from 'express-fileupload';
import * as DB from "./database.js";
import * as IMG from "./image-management.js";
import { getRelativePath } from "./paths.js";

const HTTP_SUCCESS = 200;
const HTTP_FAILURE = 400;

const apiRouter = express.Router();

apiRouter.use(express.json());
apiRouter.use(fileUpload({ createParentPath: true }));
apiRouter.use("/productPictures", express.static(getRelativePath("../product_pictures")));
apiRouter.use("/avatar", express.static(getRelativePath("../student_avatars")));

// Helper porque el proceso de baneo es muy largo
async function banStudent(username) {
  const productIDs = await DB.getStudentProductIDs(username);

  IMG.deleteProductPictures(productIDs);
  IMG.deleteStudentAvatar(username);
  await DB.deleteStudentProducts(username)
  await DB.deleteStudent(username);
}

apiRouter.post("/createStudent", async (req, res) => {
  const [avatar] = Object.values(req.files);
  const student = req.body;

  try {
    await Promise.all([
      DB.createStudent(student),
      IMG.storeStudentAvatar(student.username, avatar)
    ]);

    res.json(HTTP_SUCCESS);
  } catch (err) {
    console.log(err);

    res.sendStatus(HTTP_FAILURE);
    return;
  }
});

apiRouter.post("/createProduct", async (req, res) => {
  const pictures = Object.values(req.files);
  const product = req.body;

  try {
    const { insertId } = await DB.createProduct(product);
    const normalInsertId = Number(insertId);

    await IMG.storeProductPictures(normalInsertId, pictures);

    res.json({ insertId: Number(insertId) });
    return;
  } catch (err) {
    console.log(err);

    res.sendStatus(HTTP_FAILURE);
    return;
  }
});

apiRouter.post("/getStudent", async (req, res) => {
  const username = req.body.username;

  try {
    const student = await DB.getStudent(username);

    res.json(student);
    return;
  } catch (err) {
    console.log(err);

    res.sendStatus(HTTP_FAILURE);
    return;
  }
});

apiRouter.post("/getProduct", async (req, res) => {
  const product_id = req.body.product_id;

  try {
    const product = await DB.getProduct(product_id);
    const numberPictures = await IMG.countProductPictures(product_id);

    res.json({ numberPictures, ...product });
    return;
  } catch (err) {
    console.log(err);

    res.sendStatus(HTTP_FAILURE);
    return;
  }
});

apiRouter.post("/getStudentProducts", async (req, res) => {
  const username = req.body.username;

  try {
    const { products } = await DB.getStudentProducts(username);
    const normalProducts = products.map((product) => {
      const numberPictures = IMG.countProductPictures(product.product_id);

      return { numberPictures, ...product };
    });

    res.json({ products: normalProducts });
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
    const view = await DB.getProductWithStudent(product_id);
    const numberPictures = IMG.countProductPictures(product_id);

    res.json({ numberPictures, ...view });
    return;
  } catch (err) {
    console.log(err);

    res.sendStatus(HTTP_FAILURE);
    return;
  }
});

apiRouter.post("/getAllProducts", async (req, res) => {
  const username = req.body.username;
  const products = await DB.getAllProducts(username);

  res.json(products);
});

apiRouter.post("/existsStudent", async (req, res) => {
  const username = req.body.username;

  try {
    const exists = await DB.existsStudent(username);

    res.json(exists);
    return;
  } catch (err) {
    console.log(err);

    res.sendStatus(HTTP_FAILURE);
    return;
  }
});

apiRouter.post("/existsPhoneNumber", async (req, res) => {
  const phone_number = req.body.phone_number;
  const exists = await DB.existsPhoneNumber(phone_number);

  res.json(exists);
});

apiRouter.post("/existsProduct", async (req, res) => {
  const product_id = req.body.product_id;

  try {
    const exists = await DB.existsProduct(product_id);

    res.json(exists);
    return;
  } catch (err) {
    console.log(err);

    res.sendStatus(HTTP_FAILURE);
    return;
  }
});

apiRouter.post("/toggleIsSold", async (req, res) => {
  const product_id = req.body.product_id;

  try {
    await DB.toggleIsSold(product_id);

    res.sendStatus(HTTP_SUCCESS);
  } catch (err) {
    console.log(err);

    res.sendStatus(HTTP_FAILURE);
  }
});

apiRouter.post("/runStrike", async (req, res) => {
  const username = req.body.username;

  const MAX_STRIKES = 3;
  const strikes = await DB.getStudentStrikes(username);

  if (strikes >= (MAX_STRIKES - 1)) {
    await DB.restartStudentStrikes(username);
    await DB.punishStudent(username);

    const reputation = await DB.getStudentReputation(username);

    if (reputation <= 0) {
      await banStudent(username);
    }
  } else {
    await DB.addStudentStrike(username);
  }
});

export default apiRouter;