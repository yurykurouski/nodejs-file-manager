import { resolve, join } from "path";
import { deleteFile } from './deleteFile.js';
import { ERROR_TYPE } from "../../constants/index.js";
import { createReadStream, createWriteStream } from "fs";
import { printError, printCurrentDir } from "../../utils/index.js";

export const copyMoveFile = ([fileName, targetDir], currDir, isMove) => {
  if (!fileName || typeof targetDir !== 'string') return printError(ERROR_TYPE.INPUT);

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

  readableStream.on("error", () => {
    deleteFile(fileName, currDir);
    printError();
  });
  writeableStream.on("error", () => printError());
}