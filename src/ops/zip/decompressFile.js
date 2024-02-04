import zlib from 'zlib';
import fs from 'fs';
import { basename, resolve } from 'path';
import { printError, printCurrentDir } from "../../utils/index.js";


export const decompressFile = ([filePath, targetPath], currDir) => {
  if (!filePath) return printError();

  const name = basename(filePath, '.gzip');

  const compressStream = zlib.createBrotliDecompress();
  const readableStream = fs.createReadStream(filePath);
  const writeableStream = fs.createWriteStream(resolve(targetPath, name));

  readableStream.pipe(compressStream).pipe(writeableStream);

  writeableStream.on('finish', () => printCurrentDir(currDir));

  compressStream.on('error', printError);
  readableStream.on('error', printError);
  writeableStream.on('error', (err) => console.log(err));
}