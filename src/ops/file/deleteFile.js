import { rm } from "fs";
import { join } from "path";
import { printError, printCurrentDir } from "../../utils/index.js";


export const deleteFile = (fileName, currDir) => {
  if (!fileName) return printError();

  const filePath = fileName[0] === '/' ? fileName : join(currDir, fileName);

  rm(filePath, (err) => {
    if (err) {
      printError();
    } else {
      printCurrentDir(currDir);
    }
  });
}