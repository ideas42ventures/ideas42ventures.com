const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "application/json",
  "Access-Control-Allow-Methods": "GET",
};

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    headers,
    body: JSON.stringify({ message: "I am alive" }),
  });
};
