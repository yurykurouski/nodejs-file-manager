export const parseArgs = async () => {
  const args = process.argv.slice(2)

  const argsValues = {};

  for (let i in args) {
    const [param, value] = args[i].split('=');

    argsValues[param] = value;
  }

  return argsValues;
};
