export const defineCorrectRouteName = (string, linksAreDisabled) =>
  linksAreDisabled ? "#" : string.split(" ").join("-");
