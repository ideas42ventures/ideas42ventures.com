const BASE = "ideas42ventures";
const headers = {
  "Access-Control-Allow-Origin": `https://www.${BASE}.com/`,
  "Access-Control-Allow-Headers": "application/json",
  "Access-Control-Allow-Methods": "POST",
};

exports.handler = function (event, context, callback) {
  verifyReq(callback, event);
  const { body } = event;
  const formTag = JSON.parse(body).payload.data.tags[0];
  if (formTag === "Web Sign up") {
    handleNewsletter(body);
  }
};

function handleNewsletter(body) {
  const { email } = JSON.parse(body).payload;
  const isEmail = /^[^@]+@[^@]+\.[^@]+$/.test(email);

  if (!isEmail || statusCode === 400) {
    respondWith(callback, 400, "This is an invalid email");
  } else {
    respondWith(callback, 200, "Thanks for signing up");
  }
}

function verifyReq(callback, { multiValueHeaders, httpMethod }) {
  const { host } = multiValueHeaders;
  const origin = host[0];

  if (httpMethod !== "POST") {
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
