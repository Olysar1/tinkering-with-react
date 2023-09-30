export const validate = (type: string, payload: string): boolean => {
  switch (type) {
    case "firstName":
    case "lastName":
      if (payload === "") return false;
      const stringPattern = /^[a-zA-Z\s]+$/; //checks if the string contains only characters OR spaces
      return stringPattern.test(payload);
    case "age":
      if (!payload) return false;
      const numberPattern = /^[0-9]+$/; //checks if the string contains only numbers
      return numberPattern.test(payload);
    case "notes":
      return payload.split("").length <= 100;
  }
  return false;
};
