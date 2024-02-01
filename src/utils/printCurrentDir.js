export const printCurrentDir = (dirName) => {
  process.stdout.write(`You are currently in ${ dirName }\n`, (err) => {
    if (err) throw new Error("Error");
  });
}