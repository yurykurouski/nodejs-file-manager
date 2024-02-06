import { printCurrentDir } from './printCurrentDir.js';

export const printGreetings = (userName, currentDir) => {
  process.stdout.write(`Welcome to the File Manager, ${ userName }!\n`);
  printCurrentDir(currentDir);
}
