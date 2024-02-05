import {
  readFile,
  createFile,
  renameFile,
  copyMoveFile,
  deleteFile
} from './ops/file/index.js';
import {
  COMMAND_LS,
  COMMAND_UP,
  COMMAND_OS,
  COMMAND_CD,
  COMMAND_CAT,
  COMMAND_ADD,
  COMMAND_RN,
  COMMAND_CP,
  COMMAND_MV,
  COMMAND_RM,
  COMMAND_HASH,
  COMMAND_COMPRESS,
  COMMAND_DECOMPRESS,
  COMMAND_EXIT,
  ERROR_TYPE
} from './constants/index.js';
import { getOSInfo } from './getOSInfo.js';
import { printError } from './utils/index.js';
import { calculateHash } from './ops/hash/index.js';
import { printFolderContent } from './printFolderContent.js'
import { compressFile, decompressFile } from './ops/zip/index.js';
import { changeDirectory, goDirectoryUp } from './ops/navigation/index.js';


export const listenOnInput = async (currentDir) => {
  process.stdin.on("data", async data => {
    const [command, ...args] = data.toString().slice(0, -1).split(' ');

    switch (command) {
      case COMMAND_LS:
        printFolderContent(currentDir);
        break;
      case COMMAND_UP: {
        currentDir = goDirectoryUp(currentDir);
        break;
      }
      case COMMAND_CD:
        currentDir = await changeDirectory(args[0], currentDir);
        break;
      case COMMAND_OS:
        getOSInfo(args[0], currentDir);
        break;
      case COMMAND_CAT:
        readFile(args[0], currentDir);
        break;
      case COMMAND_ADD:
        await createFile(args[0], currentDir);
        break;
      case COMMAND_RN:
        renameFile(args, currentDir);
        break;
      case COMMAND_CP:
        copyMoveFile(args, currentDir);
        break;
      case COMMAND_MV:
        copyMoveFile(args, currentDir, true);
        break;
      case COMMAND_RM:
        deleteFile(args[0], currentDir);
        break;
      case COMMAND_HASH:
        calculateHash(args[0], currentDir);
        break;
      case COMMAND_COMPRESS:
        compressFile(args, currentDir);
        break;
      case COMMAND_DECOMPRESS:
        decompressFile(args, currentDir);
        break;

      case COMMAND_EXIT:
        process.exit();

      default:
        printError(ERROR_TYPE.INPUT);
    }
  });
}
