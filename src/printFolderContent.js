import { table } from 'console'
import { getSortedFolderContent } from './utils/getSortedFolderContent.js';
import { printCurrentDir } from './utils//index.js';

export const printFolderContent = async (currentDir) => {
  const folderContent = await getSortedFolderContent(currentDir);

  printCurrentDir(currentDir);
  table(folderContent);
}