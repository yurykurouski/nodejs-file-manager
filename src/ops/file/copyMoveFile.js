import { createReadStream, createWriteStream, rm } from "fs";
import { resolve, join } from "path";

import { printError, printCurrentDir } from "../../utils/index.js";
import { deleteFile } from './deleteFile.js';

export const copyMoveFile = ([fileName, targetDir], currDir, isMove) => {
  if (!fileName || !targetDir) return printError();

  const filePath = fileName[0] === '/' ? fileName : join(currDir, fileName);
  const targetPath = targetDir[0] === '/' ? targetDir : join(currDir, targetDir);

  const readableStream = createReadStream(filePath);
  const writeableStream = createWriteStream(resolve(targetPath, `${ fileName }`));

  readableStream.pipe(writeableStream);

  writeableStream.on("finish", () => {
    if (isMove) {
      deleteFile(fileName, currDir);
    } else {
      printCurrentDir(currDir);
    }
  });

  readableStream.on("error", printError);
  writeableStream.on("error", printError);
}