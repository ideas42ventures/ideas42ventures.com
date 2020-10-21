const BASE = "ideas42ventures";
const headers = {
  "Access-Control-Allow-Origin": `https://www.${BASE}.com/`,
  "Access-Control-Allow-Headers": "application/json",
  "Access-Control-Allow-Methods": "POST",
};

exports.handler = async ({ body }, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "cool" }),
  };
  // console.log(body)
  // const {
  //   data: { tags },
  // } = JSON.parse(body).payload;
  // let isSubscribeForm;
  // try {
  //   isSubscribeForm = tags[0].toLowerCase() === "web sign up";
  // } catch {
  //   isSubscribeForm = false;
  // }
  // if (isSubscribeForm) {
  //   const { email } = JSON.parse(body).payload;
  //   const isEmail = /^[^@]+@[^@]+\.[^@]+$/.test(email);

  //   if (!isEmail) {
  //     return respondWith(400, "This is an invalid email");
  //   } else {
  //     return respondWith(200, "Thanks for signing up");
  //   }
  // }
};
