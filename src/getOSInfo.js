import {
  COMMAND_ARG_EOL,
  COMMAND_ARG_ARCH,
  COMMAND_ARG_CPUS,
  COMMAND_ARG_HOMEDIR,
  COMMAND_ARG_USERNAME,
  ERROR_TYPE,
} from './constants/index.js';
import { log, table } from 'console';
import { EOL, cpus, homedir, userInfo, arch } from 'os';
import { printCurrentDir, printError } from './utils/index.js';


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
      printError(ERROR_TYPE.INPUT);
  }

  printCurrentDir(dirName);
}
