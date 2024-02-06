import path from 'path';
import { printCurrentDir } from '../../utils/index.js';

export const goDirectoryUp = (currentDir) => {
  const rootDir = path.parse(process.cwd()).root;

  if (rootDir === currentDir) {
    printCurrentDir(currentDir);

    return currentDir;
  } else {
    const newDirName = currentDir.split('/').slice(0, -1).join('/');

    if (!newDirName.length) {
      printCurrentDir('/');

      return '/';
    }

    printCurrentDir(newDirName);

    return newDirName;
  }
}
