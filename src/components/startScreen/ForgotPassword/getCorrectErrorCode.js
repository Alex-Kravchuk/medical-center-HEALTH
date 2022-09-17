export const getCorrectErrorCode = (code) => {
  switch (code) {
    case "auth/invalid-email":
      return "You have entered an invalid email address. Please try one more time!";
    case "auth/user-not-found":
      return "No such user exists";
    case "auth/network-request-failed":
      return "No internet connection";
    default:
      return "Something went wrong";
  }
};
