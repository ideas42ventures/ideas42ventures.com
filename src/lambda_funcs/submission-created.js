const BASE = "ideas42ventures";
const headers = {
  "Access-Control-Allow-Origin": `https://www.${BASE}.com/`,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST",
};

exports.handler = function (event, context, callback) {
  verifyReq(callback, event);

  const email = JSON.parse(event.body).payload.email;
  const isEmail = /^[^@]+@[^@]+\.[^@]+$/.test(email);

  if (!isEmail) {
    return respondWith(callback, 400, "This is an invalid email");
  }
  return respondWith(callback, 200, "Thanks for signing up");
};

function verifyReq(cb, event) {
  const { host } = event.multiValueHeaders;
  const origin = host[0];

  if (event.httpMethod !== "POST") {
    return respondWith(cb, 400, "Method not allowed");
  } else if (!origin.includes(BASE)) {
    return respondWith(
      cb,
      400,
      "You are not allowed to submit an email address from here"
    );
  }
}

function respondWith(cb, statusCode, msg) {
  cb(null, {
    statusCode,
    headers,
    body: JSON.stringify({ msg }),
  });
}
