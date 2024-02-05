

import { rename } from "fs/promises";
import { resolve, join } from "path";
import { printCurrentDir, printError } from '../../utils/index.js';

export const renameFile = async ([oldName, newName], currDir) => {
  try {
    await rename(resolve(currDir, oldName), join(currDir, newName));

    printCurrentDir(currDir);
  } catch {
    printError();
  }
}