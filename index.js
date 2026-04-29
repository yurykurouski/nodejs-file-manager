import { parseArgs } from './src/parseArgs.js';
import { printGreetings } from './src/utils/index.js'
import { getDirName } from './src/utils/getDirName.js'
import { listenOnInput } from './src/listenOnInput.js';
import { ARG_USERNAME } from './src/constants/index.js';


(async function main() {
  const currentDir = getDirName(import.meta.url);

  const args = await parseArgs();
  const userName = args[ARG_USERNAME];

  printGreetings(userName, currentDir);

  await listenOnInput(currentDir);

  process.on('exit', () => {
    process.stdout.write(`Thank you for using File Manager, ${ userName }, goodbye!\n`);
  });

  process.on('SIGINT', () => {
    process.exit();
  });
})();

