import { table, log } from 'console'
import { getDirName } from './utils/getDirName.js';
import { getSortedFolderContent } from './utils/getSortedFolderContent.js';

export const printFolderContent = async () => {
  const dirName = getDirName(import.meta.url);

  const folderContent = await getSortedFolderContent(dirName);

  table(folderContent);
}