async function sendResource(route, body) {
  const options = {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    mode: "same-origin",
    body: JSON.stringify(body)
  };

  let response = null;

  try {
    response = await fetch(route, options);
  } catch (err) {
    throw new Error(`Failed to fetch ${route}`, { cause: err });
  }

  if (response.ok)
    return response;
  else
    throw new Error(`Bad request at ${route} with ${JSON.stringify(body)}`, {
      cause: {
        route: route,
        body: body
      }
    });
}

async function retrieveResource(route, body) {
  const response = await sendResource(route, body);

  try {
    const json = await response.json();

    return json;
  } catch (err) {
    throw new Error("Failed to parse response JSON", { cause: err });
  }
}

export { sendResource, retrieveResource };