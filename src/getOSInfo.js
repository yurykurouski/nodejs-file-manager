import { log, table } from 'console';
import { EOL, cpus, homedir, userInfo, arch } from 'os';
import {
  COMMAND_ARG_EOL,
  COMMAND_ARG_ARCH,
  COMMAND_ARG_CPUS,
  COMMAND_ARG_HOMEDIR,
  COMMAND_ARG_USERNAME,
} from './constants/index.js';
import { printCurrentDir } from './utils/printCurrentDir.js';


export const getOSInfo = (arg, dirName) => {
  switch (arg) {
    case COMMAND_ARG_EOL:
      log(EOL);
      break;
    case COMMAND_ARG_CPUS:
      table(cpus());
      break;
    case COMMAND_ARG_HOMEDIR:
      log(homedir());
      break;
    case COMMAND_ARG_USERNAME:
      log(userInfo().username);
      break;
    case COMMAND_ARG_ARCH:
      log(arch());
      break;

    default:
      process.stdout.write('Invalid input\n');
  }

  printCurrentDir(dirName);
}