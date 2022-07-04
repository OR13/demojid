const fs = require("fs");
const alphabet = fs
  .readFileSync("./scripts/demojid_alphabet.txt")
  .toString()
  .split("\n")
  .map((line) => {
    const [emoji] = line.split(" ");
    return emoji;
  });

// console.log(alphabet);
fs.writeFileSync("./alphabet.json", JSON.stringify(alphabet, null, 2));
