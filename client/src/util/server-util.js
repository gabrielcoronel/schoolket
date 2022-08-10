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

const storeStudentAvatar = (username, originalFormData) => {
  const [[_, avatar]] = originalFormData.entries();

  const formData = new FormData();
  formData.append(username, avatar);

  return fetch(serverURL("/storeStudentAvatar"), {
    method: "POST",
    body: formData
  });
};

export {
  JSONHeaders, serverURL, usernameTaken,
  createStudent, storeStudentAvatar
};