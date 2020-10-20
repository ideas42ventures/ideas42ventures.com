const BASE = "ideas42ventures";
const headers = {
  "Access-Control-Allow-Origin": `https://www.${BASE}.com/`,
  "Access-Control-Allow-Headers": "application/json",
  "Access-Control-Allow-Methods": "POST",
};

exports.handler = (event, context, callback) => {
  console.log(event);
};

// function handleNewsletter(body) {
//   console.log(body)
//   const { email } = JSON.parse(body).payload;
//   const isEmail = /^[^@]+@[^@]+\.[^@]+$/.test(email);
//   if (httpMethod !== "POST") respondWith(callback, 400, "Method not allowed");

//   if (!isEmail || statusCode === 400) {
//     respondWith(callback, 400, "This is an invalid email");
//   } else {
//     respondWith(callback, 200, "Thanks for signing up");
//   }
// }

// function respondWith(callback, statusCode, message) {
//   callback(null, {
//     statusCode,
//     headers,
//     body: JSON.stringify({ message, statusCode }),
//   });
// }
