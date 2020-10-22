const fetch = require("node-fetch");
const { BUTTONDOWN_API_KEY } = process.env;

const config = (userEmail) => {
  return {
    method: "POST",
    headers: {
      Authorization: `Token ${BUTTONDOWN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: userEmail }),
  };
};

exports.handler = async ({ body }) => {
  const email = getEmail(body);

  try {
    const response = await fetch(
      "https://api.buttondown.email/v1/subscribers",
      config(email)
    );

    const data = await response.json();
    if (!hasError(data)) {
      return respondWith(400, "Could not sign user up to newsletter");
    }
    return respondWith(200, "Thanks for signing up!");
  } catch (error) {
    return respondWith(500, "Could not sign user up to newsletter");
  }
};

function getEmail(email) {
  return decodeURIComponent(email).slice(6).split("&")[0];
}

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
