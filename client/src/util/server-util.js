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

const getStudentAvatarURL = (username) =>
  `${serverURL("/avatar")}/${username}.png`;

export {
  JSONHeaders, serverURL, usernameTaken,
  createStudent, createProduct,
  getStudent, getStudentAvatarURL
};