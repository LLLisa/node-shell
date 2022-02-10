const fs = require('fs');

const ls = (cmd) => {
  fs.readdir(process.cwd(), function (err, items) {
    if (err) {
      throw err;
    }
    console.log(items);
    console.log('prompt> ');
  });
};

module.exports = {
  ls,
};
