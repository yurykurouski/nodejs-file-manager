import fs from 'fs';
import zlib from 'zlib';
import { basename, resolve } from 'path';
import { ERROR_TYPE } from '../../constants/index.js';
import { printError, printCurrentDir } from "../../utils/index.js";


export const decompressFile = ([filePath, targetPath], currDir) => {
  if (!filePath) return printError(ERROR_TYPE.INPUT);

  const name = basename(filePath, '.gzip');

  const compressStream = zlib.createBrotliDecompress();
  const readableStream = fs.createReadStream(filePath);
  const writeableStream = fs.createWriteStream(resolve(targetPath || currDir, name));

  readableStream.pipe(compressStream).pipe(writeableStream);

  writeableStream.on('finish', () => printCurrentDir(currDir));

  compressStream.on('error', printError);
  readableStream.on('error', printError);
  writeableStream.on('error', printError);
}