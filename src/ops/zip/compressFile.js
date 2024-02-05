import fs from 'fs';
import zlib from 'zlib';
import { basename, resolve } from 'path';
import { ERROR_TYPE } from '../../constants/index.js';
import { printError, printCurrentDir } from "../../utils/index.js";


export const compressFile = ([sourceFile, targetDir], currDir) => {
  if (!sourceFile) return printError(ERROR_TYPE);

  const fileName = basename(sourceFile);

  const compressStream = zlib.createBrotliCompress();
  const readableStream = fs.createReadStream(sourceFile);
  const writeableStream = fs.createWriteStream(resolve(targetDir || currDir, `${ fileName }.gzip`));

  readableStream.pipe(compressStream).pipe(writeableStream);

  writeableStream.on('finish', () => printCurrentDir(currDir));

  compressStream.on('error', () => printError());
  readableStream.on('error', () => printError());
  writeableStream.on('error', () => printError());
}