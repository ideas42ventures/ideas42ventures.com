const fetch = require("node-fetch");
const { BUTTONDOWN_API_KEY } = process.env;

exports.handler = async ({ headers, body }) => {
  const params = new URLSearchParams(body);

  const botField = params.get("bot-field").length;
  if (botField >= 1) {
    return respondWith(400, "Invalid request");
  }

  const email = params.get("email");
  const tag = params.get("tags");

  const tags = [];
  tags.push(tag);

  if (headers["content-type"] === "application/x-www-form-urlencoded") {
    await handleRequest(email, tags);
    return {
      statusCode: 302,
      headers: {
        Location: "/subscribed",
        "Cache-Control": "no-cache",
      },
    };
  }

  try {
    const response = await handleRequest(email, tags);

    const data = await response.json();
    if (!hasError(data)) {
      console.error({ error: data });
      return respondWith(400, "We ran into an error. Please try again");
    }
    return respondWith(200, "Thanks for signing up!");
  } catch (error) {
    console.log({ error });
    return respondWith(500, "We ran into an error. Please try again");
  }
};

function respondWith(statusCode, message) {
  return {
    statusCode: statusCode,
    body: JSON.stringify({ message, statusCode }),
  };
}

function hasError(data) {
  return (
    Array.isArray(data) ||
    data.length === 1 ||
    /^[^@]+@[^@]+\.[^@]+$/.test(data.email)
  );
}

async function handleRequest(email, tags) {
  return await fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${BUTTONDOWN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, tags }),
  });
}
