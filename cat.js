const fs = require('fs');

function cat(fileToCat) {
  if (!fileToCat) {
    console.log('missing file name');
  }
  process.stdout.write('hello');
  const catFile = fs.readFile(fileToCat, (err, data) => {
    if (err) {
      console.log('cat err');
    } else {
      console.log(data.toString());
    }
    process.stdout.write('\nprompt> ');
  });
}

module.exports = { cat };
