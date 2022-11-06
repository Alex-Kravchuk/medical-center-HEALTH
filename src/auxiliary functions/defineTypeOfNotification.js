export const defineTypeOfNotification = (type, data) => {
  const template = {
    type,
    contentData: data,
  };

  switch (type) {
    case "hospitalization":
      return {
        category: "client",
        ...template,
      };

    case "appointment":
      return {
        category: "doctor",
        ...template,
      };


    case "discharged": {
      return { category: "client", ...template };
    }

    case "feedback": {
      return { category: "doctor", ...template };
    }
    default:
      break;
  }
};
