import { createReadStream, createWriteStream } from "fs";
import { resolve, join } from "path";

import { printError, printCurrentDir } from "../../utils/index.js";

export const copyFile = ([fileName, targetDir], currDir) => {
  if (!fileName || !targetDir) return printError();

  const filePath = fileName[0] === '/' ? fileName : join(currDir, fileName);
  const targetPath = targetDir[0] === '/' ? targetDir : join(currDir, targetDir);

  const readableStream = createReadStream(filePath);
  const writeableStream = createWriteStream(resolve(targetPath, `${ fileName }`));

  readableStream.pipe(writeableStream);

  writeableStream.on("finish", () => {
    printCurrentDir(currDir);
  });

  readableStream.on("error", printError);
  writeableStream.on("error", printError);
}