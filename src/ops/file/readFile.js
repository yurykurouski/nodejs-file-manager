import fs from 'fs';
import { join } from 'path';
import { printError } from '../../utils/index.js';


export const readFile = (path, currentDir) => {
  const filePath = path[0] === '/' ? path : join(currentDir, path);

  const readableStream = fs.createReadStream(filePath);

  readableStream.on('error', printError);

  readableStream.pipe(process.stdout);
}
