const generalErrorKeys = [
  "RequestError",
  "DbError",
  "NotFoundError",
  "UnknownError",
  "error",
  "Error",
];

const GetErrorMsg = (error: any, title: string = "") => {
  if (!error) return "";

  // Extract the error response from the API
  const responseErrors = error?.response?.data?.errors;
  const fallbackMessage = error?.message || "An unknown error occurred.";

  // Handle general errors
  if (title === "general") {
    const generalError = generalErrorKeys.find((key) => responseErrors?.[key]);
    return responseErrors?.[generalError || "error"] || fallbackMessage;
  }

  // Handle input validation errors (array structure)
  if (Array.isArray(responseErrors?.errors)) {
    const specificError = responseErrors?.errors?.find((item:any) => item.key === title);
    if (specificError?.errors?.length) {
      return specificError.errors.join(", ");
    }
  }

  // If no specific or general error is found, return the fallback message
  return null ;
};

export default GetErrorMsg;
