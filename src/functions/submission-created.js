const BASE = "ideas42ventures";
const headers = {
  "Access-Control-Allow-Origin": `https://www.${BASE}.com/`,
  "Access-Control-Allow-Headers": "application/json",
  "Access-Control-Allow-Methods": "POST",
};

exports.handler = function (event, context, callback) {
  verifyReq(callback, event);

  const { email } = JSON.parse(event.body).payload;
  const isEmail = /^[^@]+@[^@]+\.[^@]+$/.test(email);

  if (!isEmail || statusCode === 400) {
    return respondWith(callback, 400, "This is an invalid email");
  } else {
    return respondWith(callback, 200, "Thanks for signing up");
  }
};

function verifyReq(callback, event) {
  const { host } = event.multiValueHeaders;
  const origin = host[0];

  if (event.httpMethod !== "POST") {
    respondWith(callback, 400, "Method not allowed");
  } else if (origin.includes(BASE) === false) {
    respondWith(
      callback,
      400,
      "You are not allowed to submit an email address from here"
    );
  }
}

function respondWith(callback, statusCode, message) {
  callback(null, {
    statusCode,
    headers,
    body: JSON.stringify({ message, statusCode }),
  });
}
