const BASE = "ideas42ventures";
const headers = {
  "Access-Control-Allow-Origin": `https://www.${BASE}.com/`,
  "Access-Control-Allow-Headers": "application/json",
  "Access-Control-Allow-Methods": "POST",
};

exports.handler = async ({ body }, context) => {
  console.log(body.payload);

  const { email } = JSON.parse(body).payload;
  const isEmail = /^[^@]+@[^@]+\.[^@]+$/.test(email);

  if (!isEmail) {
    return respondWith(400, "This is an invalid email");
  } else {
    return respondWith(200, "Thanks for signing up");
  }
};

function respondWith(statusCode, message) {
  return {
    statusCode,
    headers,
    body: JSON.stringify({ message, statusCode }),
  };
}
