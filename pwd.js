const pwd = (cmd) => {
  console.log(process.cwd());
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt> ');
};

module.exports = {
  pwd,
};
