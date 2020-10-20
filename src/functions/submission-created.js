exports.handler = async (event, context) => {
  console.log(event);
  console.log(context);
  console.log("-----------------------");
  console.log(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "A new form submission came in" }),
  };
};
