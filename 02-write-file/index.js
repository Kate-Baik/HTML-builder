

const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');

const output = fs.createWriteStream(path.join(path.basename(__dirname),'greetings.txt'), {flags: 'w+'});

function exit() {
  output.close();
  stdout.write('Хорошего дня!');
  process.exit();
}

process.on('SIGINT', () => exit());

process.stdin.setEncoding ("utf-8")

stdout.write('Напиши что-нибудь\n');
stdin.on('data', data => {
  dataString = data.toString().trimEnd();
  if (dataString === "exit") {
    exit()
  } else {
    output.write(dataString + "\n")
    stdout.write('Что-то еще?\n');
  }
});
