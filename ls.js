const fs = require('fs');

const ls = (cmd) => {
  const files = fs.readdir(process.cwd(), function (err, items) {
    if (err) {
      throw err;
    }
    console.log(items);
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt> ');
  });
};

module.exports = {
  ls,
};
