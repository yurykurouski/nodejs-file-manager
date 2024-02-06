import { join } from 'path';
import { writeFile } from "fs/promises";
import { printCurrentDir, printError } from '../../utils/index.js';

export const createFile = async (filename, currDir) => {
  try {
    await writeFile(join(currDir, filename), "", { flag: "wx" });

    printCurrentDir(currDir);
  } catch {
    printError();
  }
}
