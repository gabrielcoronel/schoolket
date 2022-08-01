async function fetchResource(url, params) {
  // Configuración de la solicitud
  const headers = {
    "Content-Type": "application/json"
  };
  const options = {
    method: "POST",
    body: JSON.stringify(params),
    headers: new Headers(headers)
  };

  // Hacer la solicitud
  let response = null;

  try {
    response = await fetch(url, options);
  } catch (err) {
    throw new Error(`Failed to fetch '${url}'`, {
      cause: err
    });
  }

  // Checkear estado de la respuesta
  if (!response.ok)
    throw new Error(
      `Error [status = ${response.status}]:
      Bad resquest at ${url} with ${JSON.stringify(params)}`,
      {
        cause: {
          url: url,
          params: params
        }
      }
    );

  // Parsear la respuesta
  let json = null;

  try {
    json = await response.json();
  } catch (err) {
    throw new Error(`Failed to parse response into JSON`, {
      cause: err
    });
  }

  return json;
}

export default fetchResource;