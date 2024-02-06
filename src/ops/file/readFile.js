import fs from 'fs';
import { join } from 'path';
import { printError } from '../../utils/index.js';
import { ERROR_TYPE } from '../../constants/index.js';


export const readFile = (path, currentDir) => {
  const filePath = path[0] === '/' ? path : join(currentDir, path);

  const readableStream = fs.createReadStream(filePath);

  readableStream.on('data', (chunk) => {
    console.log(chunk.toString());
  });

  readableStream.on('error', () => printError(ERROR_TYPE.OPERATION));
}
