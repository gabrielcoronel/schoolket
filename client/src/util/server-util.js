const serverRoot = "http://localhost:3001/api";

const JSONHeaders = new Headers({
  "Content-Type": "application/json"
});

const serverURL = (route) => serverRoot + route;

const objectToFormData = (obj) => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(obj))
    formData.append(key, value);

  return formData;
};

const arrayToIDMap = (arr) => {
  const IDMap = {};
  let ID = 0;

  for (const e of arr) {
    IDMap[`${ID}`] = e;
    ID++;
  }

  return IDMap;
};

const logFormData = (formData) => {
  for (const [key, value] of formData.entries())
    console.log(key, value);
};

const usernameTaken = async (username) => {
  const response = await fetch(serverURL("/existsStudent"), {
    method: "POST",
    body: JSON.stringify({ username }),
    headers: JSONHeaders
  });

  const json = await response.json();

  return json.exists;
};

const phoneNumberTaken = async (phone_number) => {
  const response = await fetch(serverURL("/existsPhoneNumber"), {
    method: "POST",
    body: JSON.stringify({ phone_number }),
    headers: JSONHeaders
  });

  const json = await response.json();

  return json.exists;
};

const createStudent = (student, formData) => {
  const reputation = 25;
  const [avatar] = formData.values();
  const requestFormData = objectToFormData({ avatar, reputation, ...student});

  return fetch(serverURL("/createStudent"), {
    method: "POST",
    body: requestFormData
  });
};

const createProduct = (product, formData) => {
  const pictures = formData.values();
  const picturesIDMap = arrayToIDMap(pictures);
  const requestFormData = objectToFormData({
    ...product,
    ...picturesIDMap
  });

  return fetch(serverURL("/createProduct"), {
    method: "POST",
    body: requestFormData
  });
};

const getStudent = async (username) => {
  const response = await fetch(serverURL("/getStudent"), {
    method: "POST",
    body: JSON.stringify({ username }),
    headers: JSONHeaders
  });
  const json = await response.json();

  return json;
};

const getProductWithStudent = async (product_id) => {
  const response = await fetch(serverURL("/getProductWithStudent"), {
    method: "POST",
    body: JSON.stringify({ product_id }),
    headers: JSONHeaders
  });
  const json = await response.json();

  return json;
};

const getStudentAvatarURL = (username) =>
  `${serverURL("/avatar")}/${username}.png`;

const getProductPictureURLs = (product_id, numberPictures) => {
  const dummyArray = new Array(numberPictures).fill(null);
  const productPictureURLs = dummyArray.map((_, index) => {
    return `${serverURL("/productPictures")}/${product_id}/${index}.png`
  });

  return productPictureURLs;
};

export {
  JSONHeaders, serverURL, usernameTaken, phoneNumberTaken,
  createStudent, createProduct,
  getStudent, getStudentAvatarURL,
  getProductWithStudent, getProductPictureURLs
};