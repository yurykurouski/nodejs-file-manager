import { readdir } from 'fs/promises';
import { ERROR_TYPE } from '../constants/index.js';

export const getSortedFolderContent = async (source) => {
  try {
    const content = await readdir(source, { withFileTypes: true });

    const { directories, files } = content.reduce((acc, dirent) =>
      dirent.isDirectory()
        ? { ...acc, directories: [...acc.directories, { Name: dirent.name, Type: 'directory' }] }
        : { ...acc, files: [...acc.files, { Name: dirent.name, Type: 'file' }] },
      {
        directories: [],
        files: [],
      });

    return [
      ...directories.sort((a, b) => a.Name - b.Name),
      ...files.sort((a, b) => a.Name - b.Name)
    ];
  } catch {
    printError(ERROR_TYPE.OPERATION);
  }
}
