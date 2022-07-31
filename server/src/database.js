import mariadb from "mariadb";

// Constantes de Maria DB
const HOST = '127.0.0.1';
const USER = 'gabriel';
const PASSWORD = 'magicmike33';
const DATABASE_NAME = 'expotec1';
const CONNECTION_LIMIT = 100;
const STUDENT_TABLE_NAME = "student";
const PRODUCT_TABLE_NAME = "product";

// Pool principal para todas la operaciones en la base de datos
const pool = mariadb.createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE_NAME,
  connectionLimit: CONNECTION_LIMIT
});

function generateInsertionData(object) {
  let format = "(";
  let values = "(";

  for (const [k, v] of Object.entries(object)) {
    format += `${k},`;
    values += `'${v}',`;
  }

  format = format.slice(0, -1);
  values = values.slice(0, -1);

  format += ")";
  values += ")"

  return [format, values];
}

function generateInsertQuery(tableName, object) {
  const [format, values] = generateInsertionData(object);
  const query = `
    INSERT INTO ${tableName} ${format}
    VALUES ${values}
  `;

  return query;
}

function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}

function joinProductWithStudent(product, student) {
  const productCopy = cloneObject(product);
  const studentCopy = cloneObject(student);

  delete productCopy.username;
  productCopy.student = studentCopy;

  return productCopy;
}

async function insert(tableName, object, errorMessage) {
  const query = generateInsertQuery(tableName, object);
  let result = null;

  try {
    result = await pool.query(query);
  } catch (err) {
    throw new Error(errorMessage, { cause: err });
  }

  return result;
}

async function select(tableName, idKey, idValue, errorMessage) {
  const query = `
    SELECT * from ${tableName}
    WHERE ${idKey} = '${idValue}'
  `;
  let result = null;

  try {
    result = await pool.query(query);
  } catch (err) {
    throw new Error(errorMessage, { cause: err });
  }

  return result;
}

async function exists(tableName, idKey, idValue, errorMessage) {
  const query = `
    SELECT 1
    FROM ${tableName}
    WHERE ${idKey} = '${idValue}'
  `;

  let result = null;

  try {
    result = await pool.query(query);
  } catch (err) {
    throw new Error(errorMessage, { cause: err });
  }

  return (result.length !== 0);
}

async function createStudent(student) {
  const result = await insert(STUDENT_TABLE_NAME, student, "Failed to create student");

  return result;
}

async function createProduct(product) {
  const result = await insert(PRODUCT_TABLE_NAME, product, "Failed to create product");

  return result;
}

async function getStudent(username) {
  const results = await select(
    STUDENT_TABLE_NAME, "username", username, "Failed to get student"
  );

  return results[0];
}

async function getProduct(product_id) {
  const results = await select(
    PRODUCT_TABLE_NAME, "product_id", product_id, "Failed to get product"
  );

  return results[0];
}

async function getStudentProducts(username) {
  const query = `
    SELECT product_id, title, description, price
    FROM ${PRODUCT_TABLE_NAME} JOIN ${STUDENT_TABLE_NAME} AS username
    WHERE ${PRODUCT_TABLE_NAME}.username = '${username}'
  `;

  try {
    const results = await pool.query(query);

    return { products: results };
  } catch (err) {
    throw new Error("Failed to get student products", { cause: err });
  }
}

async function getProductWithStudent(product_id) {
  let product = null;

  try {
    product = await getProduct(product_id);
  } catch (err) {
    throw new Error("Failed to get product", { cause: err });
  }

  let student = null;

  try {
    const username = product.username;
    student = await getStudent(username);
  } catch (err) {
    throw new Error("Failed to get student", { cause: err });
  }

  const view = joinProductWithStudent(product, student);

  return view;
}

async function existsStudent(username) {
  const result = await exists(
    STUDENT_TABLE_NAME, "username", username, "Failed to check if the student existed"
  );

  return { exists: result };
}

async function existsProduct(product_id) {
  const result = await exists(
    PRODUCT_TABLE_NAME, "product_id", product_id, "Failed to check if the product existed"
  );

  return { exists: result };
}

export {
  createStudent, createProduct,
  getStudent, getProduct, getStudentProducts, getProductWithStudent,
  existsStudent, existsProduct
};