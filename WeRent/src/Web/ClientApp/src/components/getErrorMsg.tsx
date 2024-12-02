const generalErrorKeys = [
  "RequestError",
  "DbError",
  "NotFoundError",
  "UnknownError",
  "error",
];

const GetErrorMsg = (error: any, title: string = "") => {
  if (!error) return "";

  const messages = error?.response?.data?.errors;

  if (!messages) return "";

  if (!Object?.keys(messages)?.length) return "";

  if (title === "general") {
    return messages?.error;
  }

  if (messages[title]) return messages[title]?.join(", ");

  return "";
};

export default GetErrorMsg;
