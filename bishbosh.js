const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to the BishBosh sequence lister");
rl.question("Enter a number to be BishBoshed: ", function(xStr) {

      let x = parseInt(xStr);

      console.log("Generating BishBosh sequence:");

      for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 4 === 0) {
          console.log("BishBosh");
        } else if (i % 3 === 0) {
          console.log("Bish");
        } else if (i % 4 === 0) {
          console.log("Bosh");
        } else {
          console.log(i);
        }
      }

      rl.close();
});