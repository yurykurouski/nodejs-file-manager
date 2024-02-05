import { ERROR_TYPE } from "../constants.index.js";

export const printError = (errorMessage = ERROR_TYPE.OPERATION) => {
  console.log(errorMessage);
}