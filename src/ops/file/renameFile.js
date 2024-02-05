

import { rename } from "fs/promises";
import { resolve, join } from "path";
import { printCurrentDir, printError } from '../../utils/index.js';
import { ERROR_TYPE } from "../../constants/index.js";

export const renameFile = async ([oldName, newName], currDir) => {
  if (!oldName || !newName) return printError(ERROR_TYPE.INPUT);

  try {
    await rename(resolve(currDir, oldName), join(currDir, newName));

    printCurrentDir(currDir);
  } catch {
    printError();
  }
}