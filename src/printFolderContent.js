import { table } from 'console';
import { printCurrentDir } from './utils//index.js';
import { getSortedFolderContent } from './utils/getSortedFolderContent.js';

export const printFolderContent = async (currentDir) => {
  const folderContent = await getSortedFolderContent(currentDir);

  printCurrentDir(currentDir);
  table(folderContent);
}