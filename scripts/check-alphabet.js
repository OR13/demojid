const alphabet = require("../src/exp/alphabet.json");
let i = 0;
const { encode } = require("../src/exp/encoding");
const hexToInt = {};
for (const symbol of alphabet) {
  let hex = symbol.codePointAt(0).toString(16);
  // astral code point, you’ll get an unexpected result.
  console.log(i, hex, symbol);
  hexToInt[hex] = i;
  i++;
}
const m = "hello world!";
const message = Buffer.from(m);
const encoded = encode(message);
console.log(encoded);
const hexStrs = [];
for (const symbol of encoded) {
  const h1 = symbol.codePointAt(0);
  let hex = h1.toString(16);
  if (hex.length !== 5) {
    // astral failure... ignore...
    // possible source of JWT decoding bugs...
  } else {
    hexStrs.push(hex);
  }
}
console.log(hexStrs);
const emojiIndexs = hexStrs
  .map((s) => {
    return hexToInt[s].toString(16);
  })
  .join("");
console.log(Buffer.from(emojiIndexs, "hex").toString());
