const serverRoot = "http://localhost:3001/api";

const JSONHeaders = new Headers({
  "Content-Type": "application/json"
});

const serverURL = (route) => serverRoot + route;

const usernameTaken = async (username) => {
  const response = await fetch(serverURL("/existsStudent"), {
    method: "POST",
    body: JSON.stringify({ username }),
    headers: JSONHeaders
  });

  return response.exists;
};

const createStudent = (student) => {
  const reputation = 25;

  return fetch(serverURL("/createStudent"), {
    method: "POST",
    body: JSON.stringify({ reputation, ...student }),
    headers: JSONHeaders
  });
};

const createProduct = (product) => {
  return fetch(serverURL("/createProduct"), {
    method: "POST",
    body: JSON.stringify(product),
    headers: JSONHeaders
  });
};

const storeStudentAvatar = (username, originalFormData) => {
  const [[_, avatar]] = originalFormData.entries();

  const formData = new FormData();
  formData.append(username, avatar);

  return fetch(serverURL("/storeStudentAvatar"), {
    method: "POST",
    body: formData
  });
};

const storeProductPictures = (product_id, originalFormData) => {
  const formData = new FormData();
  const entries = originalFormData.entries();

  let index = 0;

  for (const [_, file] of entries) {
    formData.append(index.toString(), file);
    index++;
  }

  formData.append("product_id", product_id);

  return fetch(serverURL("/storeProductPictures"), {
    method: "POST",
    body: formData
  });
};

export {
  JSONHeaders, serverURL, usernameTaken,
  createStudent, storeStudentAvatar,
  createProduct, storeProductPictures
};