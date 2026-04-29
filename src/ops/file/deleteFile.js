import { rm } from "fs";
import { join } from "path";
import { ERROR_TYPE } from "../../constants/index.js";
import { printError, printCurrentDir } from "../../utils/index.js";


export const deleteFile = (fileName, currDir) => {
  if (!fileName) return printError(ERROR_TYPE.INPUT);

  const filePath = fileName[0] === '/' ? fileName : join(currDir, fileName);

  rm(filePath, (err) => {
    if (err) {
      printError(ERROR_TYPE.OPERATION);
    } else {
      printCurrentDir(currDir);
    }
  });
}
