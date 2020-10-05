const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST",
};

exports.handler = function (event, context, callback) {
  if (event.httpMethod !== "POST") {
    callback(null, {
      statusCode: 400,
      headers,
      body: JSON.stringify("Method not allowed"),
    });
  }
  const email = JSON.parse(event.body).payload.email;
  const isEmail = /^[^@]+@[^@]+\.[^@]+$/.test(email);

  if (!isEmail) {
    return callback(null, {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        msg: "This is an invalid email",
      }),
    });
  }
  return callback(null, {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      msg: "Your email has been successfully recieved",
    }),
  });
};
