export const defineTypeOfError = (erorr) => {
  switch (erorr) {
    case "Firebase: Error (auth/email-already-in-use).":
      return "This email already in use. Please log in!";
    case "Firebase: Password should be at least 6 characters (auth/weak-password).":
      return "Password should be at least 6 characters";
    case "Firebase: Error (auth/wrong-password).":
      return "Invalid password";
    case "Firebase: Error (auth/user-not-found).":
      return "Such user is not found";
    case "Firebase: Error (auth/network-request-failed).":
      return "Something wrong with you Internet connection. Please, check it!";
    default:
      return "Something wrong";
  }
};

// "Firebase: Error (auth/email-already-in-use)."
// "Firebase: Password should be at least 6 characters (auth/weak-password)."
// Firebase: Error (auth/wrong-password).
// Firebase: Error (auth/user-not-found).
// Firebase: Error (auth/network-request-failed).
