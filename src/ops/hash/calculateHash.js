import fs from 'fs';
import { createHash } from "crypto";
import { ERROR_TYPE } from '../../constants/index.js';
import { printError, printCurrentDir } from "../../utils/index.js";


export const calculateHash = (filePath, currDir) => {
  if (!filePath) return printError(ERROR_TYPE.INPUT);

  const reader = fs.createReadStream(filePath);

  reader.on('data', (chunk) => {
    const hash = createHash("sha256").update(chunk).digest("hex");
    console.log(hash);
  });

  reader.on('end', () => printCurrentDir(currDir));
  reader.on('error', () => printError());
}
