import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const getDirName = (url) => {
  const __filename = fileURLToPath(url);

  return dirname(__filename);
}
