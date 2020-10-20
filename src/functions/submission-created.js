exports.handler = async (event, context) => {
  console.log(event);
  console.log(context);
  console.log("event.body", JSON.stringify(JSON.parse(event.body), null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "A new form submission came in" }),
  };
};
