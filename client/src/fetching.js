async function fetchResource(url, body) {
  const headers = {
    "Content-Type": "application/json"
  };
  const options = {
    method: "POST",
    body: JSON.stringify(body),
    headers: new Headers(headers)
  };

  let response = null;

  try {
    response = await fetch(url, options);
  } catch (err) {
    throw new Error(`Failed to fetch ${url}`, {
      cause: err
    });
  }

  if (!response.ok)
    throw new Error(`Bad request at ${url}`, {
      cause: {
        url,
        body
      }
    });

  return response;
}

async function send(url, body) { // Ignores response, just sends
  await fetchResource(url, body);
}

async function retrieve(url, body) {
  const response = await fetchResource(url, body);

  return response.json();
}

export { send, retrieve };