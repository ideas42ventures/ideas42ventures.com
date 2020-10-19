const BASE = "ideas42ventures";
const headers = {
  "Access-Control-Allow-Origin": `https://www.${BASE}.com/`,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST",
};

exports.handler = function async(event, context) {
  const statusCode = verifyReq(event).statusCode;
  const email = JSON.parse(event.body).payload.email;
  const isEmail = /^[^@]+@[^@]+\.[^@]+$/.test(email);

  if (!isEmail || statusCode === 400) {
    return respondWith(400, "This is an invalid email");
  } else {
    return respondWith(200, "Thanks for signing up");
  }
};

function verifyReq(event) {
  const { host } = event.multiValueHeaders;
  const origin = host[0];

  if (event.httpMethod !== "POST") {
    return respondWith(400, "Method not allowed");
  } else if (origin.includes(BASE) === false) {
    console.log("Not allowed");
    return respondWith(
      400,
      "You are not allowed to submit an email address from here"
    );
  }
}

function respondWith(statusCode, message) {
  return {
    statusCode,
    headers,
    body: JSON.stringify({ message }),
  };
}
