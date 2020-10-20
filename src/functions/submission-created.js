exports.handler = async (event, context) => {
  console.log("SUBMISSION CREATED------------------");
  console.log(event);
  console.log(context);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "A new form submission came in" }),
  };
};
