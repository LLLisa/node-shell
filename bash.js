const importedPwd = require('./pwd');
const importedLs = require('./ls');
const importedCat = require('./cat');

process.stdout.write('prompt> ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ');
  process.stdout.write(`You typed: ${cmd} \n`);

  switch (cmd[0]) {
    case 'pwd':
      importedPwd.pwd(cmd[0]);
      break;
    case 'ls':
      importedLs.ls(cmd[0]);
      break;
    case 'cat':
      if (!cmd[1]) {
        console.log('filename required \nprompt >');
        break;
      }
      importedCat.cat(cmd[1]);
    default:
  }
});
