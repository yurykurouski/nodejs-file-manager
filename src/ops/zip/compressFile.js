import zlib from 'zlib';
import fs from 'fs';
import { basename, resolve } from 'path';
import { printError, printCurrentDir } from "../../utils/index.js";


export const compressFile = ([sourceFile, targetDir], currDir) => {
  if (!sourceFile || !targetDir) return printError();

  const fileName = basename(sourceFile);

  const compressStream = zlib.createBrotliCompress();
  const readableStream = fs.createReadStream(sourceFile);
  const writeableStream = fs.createWriteStream(resolve(targetDir, `${ fileName }.gzip`));

  readableStream.pipe(compressStream).pipe(writeableStream);

  writeableStream.on('finish', () => printCurrentDir(currDir));

  compressStream.on('error', printError);
  readableStream.on('error', printError);
  writeableStream.on('error', printError);
}