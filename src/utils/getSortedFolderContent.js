import { readdir } from 'fs/promises';

export const getSortedFolderContent = async (source) => {
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
}