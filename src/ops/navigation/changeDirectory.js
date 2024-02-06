import { readdir } from 'fs/promises';
import { ERROR_TYPE } from '../../constants/index.js';
import { printError, printCurrentDir } from '../../utils/index.js';

export const changeDirectory = async (dirName, currentDir) => {
  try {
    const newDir = dirName[0] === '/'
      ? dirName
      : currentDir + `/${ dirName.replace(/\/+$/, "") }`;

    await readdir(newDir);
    printCurrentDir(newDir);
    return newDir;
  } catch {
    printError(ERROR_TYPE.INPUT);
    printCurrentDir(currentDir);
    return currentDir;
  }
}
